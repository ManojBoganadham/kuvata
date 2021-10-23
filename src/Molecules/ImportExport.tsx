import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button";
import TextArea from "../Components/TextArea";
import { useSimaraToast } from "../Global/Context";
import { IStore } from "../Store/store";

interface IImportExport {
  onCloseRequest: () => void;
}

function ImportExport(props: IImportExport) {
  const store: IStore = useSelector((state: IStore) => state);
  const [json, setJson] = useState(JSON.stringify(store.requestStore));
  const toast = useSimaraToast();
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        padding: "30px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          fontSize: "small",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "small" }}>JSON</p>
        <div>
          <Button
            appearance="secondary"
            style={{ marginLeft: "10px" }}
            cSize="small"
            onClick={() => {
              dispatch({ type: "IMPORT_REQUEST_STORE", payload: {data:json, saveLocally: store.saveLocally} });
              toast({
                title: `Imported!`,
                message: `Your JSON is imported`,
                intent: "success",
              });
              props.onCloseRequest();
            }}
          >
            Import
          </Button>
          <Button
            appearance="secondary"
            style={{ marginLeft: "10px" }}
            cSize="small"
            onClick={() => {
              navigator.clipboard.writeText(json);
              toast({
                title: `Copied!`,
                message: `JSON copied to the clipboard`,
                intent: "success",
              });
              props.onCloseRequest();
            }}
          >
            Copy
          </Button>
        </div>
      </div>
      <TextArea
        style={{ height: "90%", width: "100%", resize: "none" }}
        placeholder="Add atleast one endpoint to export into JSON"
        value={json}
        onChange={(e) => {setJson(e.target.value)}}
      />
    </div>
  );
}

export default ImportExport;
