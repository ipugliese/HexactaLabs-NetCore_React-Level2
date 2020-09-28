import { toast } from "react-toastify";
import { goBack } from "connected-react-router";
import api from "../../../common/api";
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { setLoading, ActionTypes } from "../list";

/* Actions */
function success(store) {
  return {
    type: ActionTypes.UPDATE,
    store
  };
}

export function update(store) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .put(`/store/${store.id}`, store)
<<<<<<< HEAD
      .then(response => {
        if (response.data.success) {
          toast.success("La tienda se editó con éxito");
          dispatch(success(response.data.store));
          dispatch(setLoading(false));
          return dispatch(goBack()); 
        } else {
          toast.error("La tienda ya existe.");
          return dispatch(setLoading(false));  
        }
=======
      .then(() => {
        toast.success("La tienda se editó con éxito");
        dispatch(success(store));
        dispatch(setLoading(false));
        return dispatch(goBack());
>>>>>>> 6df99f5f4d613fd1494eaa06a4f06e9e68db8cb4
      })
      .catch(error => {
        apiErrorToast(error);
        return dispatch(setLoading(false));
      });
  };
}
