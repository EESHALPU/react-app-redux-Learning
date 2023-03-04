==> In this applicantion we have setup our react app with redux
    
    1. The first steps : 

         -> install depedency for the redux
            a. npm i react-redux
            b. npm i @reduxjs/toolkit
    2. Create a seperate folder for Sotre
        -> create store :

                import { configureStore } from "@reduxjs/toolkit";
                import cartSlice from "./cartSlice";

                const store = configureStore({
                    reducer: {
                        cart : cartSlice 
                        }
                })
                export default store;


        --> create a slice for the store 

            import { createSlice } from "@reduxjs/toolkit";
            const cartSlice = createSlice({
                name : 'cart',
                initialState : {
                    items : []
                },
                reducers : {
                    addItem : (state, action)=>{
                        state.items.push(action.payload )
                    },
                    removeCart : (state, action)=>{
                        state.items.pop()
                    },
                    clearCart : (state)=>{
                        state.items = []
                    }
                }
            })
            export const {addItem,removeCart,clearCart} =cartSlice.actions;
            export default cartSlice.reducer;

         * In the above code I have created a slice with name of cart which is basically part of store
         name of slice is "cart" i put empty array as initial value  in the items 

         * reducer is basically function where I have created some action which will be basically dispatch an action from our app compoent


        3. How to read and write in store ( slice )

            A. first we need to add all components in app.js inside the <Provider store = {sotre}> </Provider>
            eg: - 
            import { Provider } from 'react-redux';
            import store from './utils/Sotre/Store';
            function App() {
                return (
                    <Provider store={store}> 
                    <div className="App">
                    <Navbar/>
                    <Routes>
                    <Route path="/" element = {<Home year={2023}/>}/>
                        <Route path="/about" element = {<About/>}/>
                        <Route path="/register" element = {<User/>}/>
                        <Route path='/login' element = {<Login/>}/>
                    </Routes>
                    </div>
                    </Provider>
                );
                }
            
            B. By using useSelector hooks I am getting data from the store
            C. By useDispatch() we will dispatch an action so that we can write data in the store

              const cartItem = useSelector((store) => store.cart.items);
              const dispatch = useDispatch()

              const handleAddItem = (data)=>{
                dispatch(addItem(data))
             }
