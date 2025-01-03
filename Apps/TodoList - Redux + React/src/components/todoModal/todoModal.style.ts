export const customStyle = {
  wrapper: {
    border: "1px solid green",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "grey",
    maxWidth: "500px",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    borderRadius: "8px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "-10px",
    right: "0",
    transform: "translateY(-100%)",
    fontSize: "2.5rem",
    padding: " 0.5rem",
    borderRadius: "4px",
    backgroundColor: "grey",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.3s ease all",
    zIndex: "-1",
  },
  form: {
    // border: "1px solid black",
  },
  title: {
    marginBottom: "1rem",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "2rem",
    gap: "1rem",
  },
};
