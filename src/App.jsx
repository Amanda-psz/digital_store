import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <Header/> */}
      <main>
        <Outlet /> {/* Renderiza os componentes filhos */}
      </main>
    {/* <Footer/> */}
    </>
  );
}
 
export default App;