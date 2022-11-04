===============
1. Using Hood: UseState
    const [name, setName] = useState("");
    const [lastName, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

2. Using Redux

    const initialState = {
      name: "",
      lastname: ""
    }

    const userReducer = (state, action ) => {
      switch (action.type) {
        case SET_NAME:
          return { ...state, name: "José Fernando" };
        case SET_LASTNAME:
          return { ...state, lastName: action.payload };
        default:
          return initialState;
      }
    }   

    'dispatch' is a better word than 'setState'
    const [state, dispatch] = useReducer(userReducer, initialState);
git restore