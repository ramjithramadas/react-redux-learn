import { useDispatch, useSelector } from "react-redux";

function Counter() {
   const value = useSelector((state) => state);
   const dispatch = useDispatch();

   const handleIncrement = () => {
      dispatch({
         type: "INCREMENT",
      });
   };

   const handleDecrement = () => {
      dispatch({
         type: "DECREMENT",
      });
   };

   return (
      <div style={{ display: "flex" }}>
         <button style={{ width: "100px" }} onClick={handleDecrement}>
            -
         </button>
         <p style={{ margin: "0 30px" }}>{value}</p>
         <button style={{ width: "100px" }} onClick={handleIncrement}>
            +
         </button>
      </div>
   );
}

export default Counter;
