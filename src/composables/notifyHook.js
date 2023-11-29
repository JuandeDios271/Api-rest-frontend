import { useQuasar } from "quasar";

export const useNotify = () => {
  const $q = useQuasar();

  const errorNotify = (message = "ERROR DE SERVIDOR") => {
    $q.notify({
      message,
      color: "negative",
      icon: "report_problem",
    });
  };

  const successNotify = (message = "EXITO") => {
    $q.notify({
      message,
      color: "green",
      icon: "report_problem",
    });
  };

  const showNotify = (message = "Error de servidor", color = "negative") => {
    $q.notify({
      message,
      color,
      icon: "report_problem",
    });
  };

  return { showNotify, errorNotify, successNotify };
};
