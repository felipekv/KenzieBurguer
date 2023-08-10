import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global.js";
import { api } from "./services/api";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList/index.jsx";
import { StyledMain, StyledContainer } from "./styles/app.js";
import { CartModal } from "./components/CartModal/index.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalValue, setTotalValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toUpperCase().includes(search.toUpperCase())
  );

  const addToCart = (productId) => {
    const newCartProduct = products.find(
      (product) => product.id === Number(productId)
    );

    const searchItem = cartProducts.find(
      (product) => product.id === Number(productId)
    );

    if (searchItem !== undefined) {
      return toast.info("O produto já se encontra no carrinho!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const cartData = [newCartProduct, ...cartProducts];
    setCartProducts(cartData);
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const removeFromCart = (productId) => {
    const newCartArray = cartProducts.filter(
      (product) => product.id !== Number(productId)
    );

    setCartProducts(newCartArray);

    toast.success("Produto removido do carrinho!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const removeAllFromCart = () => {
    setCartProducts([]);
    setTotalValue(0);
    toast.success("Todos produtos foram removidos do carrinho!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const sumTotalValue = () => {
    const totalValue = cartProducts.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    setTotalValue(totalValue);
  };

  useEffect(() => {
    sumTotalValue();
  }, [cartProducts]);

  useEffect(() => {
    setIsLoading(true);

    const getProducts = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data);
      } catch (error) {
        toast.error("Falha ao carregar produts!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleForm = (inputSearch) => {
    setSearch(inputSearch);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header
        callback={handleForm}
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        cartProducts={cartProducts}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <StyledContainer>
        <StyledMain>
          <CartModal
            handleClose={handleClose}
            open={open}
            cartProducts={cartProducts}
            removeFromCart={removeFromCart}
            removeAllFromCart={removeAllFromCart}
            totalValue={totalValue}
          />
          <ProductsList
            products={filteredProducts}
            handleClose={handleClose}
            addToCart={addToCart}
          />
        </StyledMain>
      </StyledContainer>
    </>
  );
};

export default App;
