import { useMemo } from "react";
import { SimaraDarkTheme } from "../../Global/ThemeData";
import { IRequestIntro } from "../../Interfaces/Request";
import { GetColorForHTTPMethod } from "../../Utils/Color";
interface RIVProps {
  requestIntroData: IRequestIntro;
}
function RequestIntro(props: RIVProps) {
  const intent = useMemo(
    () => GetColorForHTTPMethod(props.requestIntroData.method),
    [props.requestIntroData.method]
  );
  return (
    <div style={{ width: "100%" }}>
      <span
        style={{
          fontWeight: 700,
          borderBottom: "2px dashed " + intent,
          padding: "3px 10px",
        }}
      >
        {props.requestIntroData.method}
      </span>
      <span
        style={{
          color: SimaraDarkTheme.Colors.text.dil30,
          marginLeft: "10px",
          fontWeight: 200,
        }}
      >
        {props.requestIntroData.endpoint}
      </span>
      <p
        style={{
          marginTop: "8px",
          color: SimaraDarkTheme.Colors.text.dil60,
          fontSize: "small",
        }}
      >
        {props.requestIntroData.description}
      </p>
    </div>
  );
}

export default RequestIntro;
