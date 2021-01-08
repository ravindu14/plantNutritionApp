import {
  REMEDY_INIT,
  REMEDY_GET_SUCCESS,
  RESET_NOTIFICATION,
  HANDLE_FAILURE,
  GET_RESEARCH_SUCCESS,
  RESET_RESEARCH,
} from "@app/actionTypes/remedy";
import { navigate } from "@app/actions/routes";

export function getRemedyDetails(image, baseString, soilData) {
  return (dispatch, getState, serviceManager) => {
    dispatch({ type: REMEDY_INIT });

    const remedyService = serviceManager.get("RemedyService");

    remedyService
      .getRemedyType({ img: baseString })
      .then((response) => {
        let remedyClass = response.data.class;

        remedyService
          .getRemedyDetails({ img: baseString })
          .then((response) => {
            let result = response.data.result;
            let result_percentage = response.data.result_percentage;

            remedyService
              .getSoilDetails({ ...soilData })
              .then((res) => {
                let kValue = res.data.kValue;
                let nValue = res.data.nValue;
                let pValue = res.data.pValue;

                dispatch({
                  type: REMEDY_GET_SUCCESS,
                  payload: {
                    kValue: parseFloat(kValue).toFixed(2),
                    nValue: parseFloat(nValue).toFixed(2),
                    pValue: parseFloat(pValue).toFixed(2),
                    image,
                    remedyClass,
                    result,
                    result_percentage,
                  },
                });
                dispatch(navigate("Remedy Results"));
              })
              .catch(() => {
                dispatch({
                  type: HANDLE_FAILURE,
                  payload: { message: "Request Failed" },
                });
              });
          })
          .catch(() => {
            dispatch({
              type: HANDLE_FAILURE,
              payload: { message: "Request Failed" },
            });
          });
      })
      .catch(() => {
        dispatch({
          type: HANDLE_FAILURE,
          payload: { message: "Request Failed" },
        });
      });
  };
}

export function getResearchDetails(query) {
  return (dispatch, getState, serviceManager) => {
    dispatch({ type: REMEDY_INIT });

    const remedyService = serviceManager.get("RemedyService");

    remedyService
      .getResearchDetails(query)
      .then(({ success, data }) => {
        if (success) {
          dispatch({
            type: GET_RESEARCH_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: HANDLE_FAILURE,
            payload: { message: "No Research data found" },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: HANDLE_FAILURE,
          payload: { message: "Request Failed" },
        });
      });
  };
}

export function resetResearch() {
  return (dispatch) => {
    dispatch({ type: RESET_RESEARCH });
  };
}
