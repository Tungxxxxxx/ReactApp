function GetInItSateRedux() {
  return {
    users: [
      {
        id: 1,
        name: "Blank July",
      },
      {
        id: 2,
        name: "Annie Phase",
      },
      {
        id: 3,
        name: "Nicolas jensen",
      },
      {
        id: 4,
        name: "Patrick vender",
      },
    ],
  };
}

// Tạo 1 công nhân reduce với tham số là action và state - state của redux ko phải react, hash code state bằng giá trị initState
const rootReducer = (state, action) => {
  console.log(">>>Check state reducer", GetInItSateRedux());
  return GetInItSateRedux();
};

export default rootReducer;
