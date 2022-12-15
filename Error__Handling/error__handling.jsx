//................For Error Popup.............
const [sneakOpen, setSneakOpen] = useState();
const [message, setMessage] = useState();
const [type, setType] = useState();
const [trigger, setTrigger] = useState(false) // Add setTrigger(true) to every click action.

//................. Handling Error..............
const { response } = useSelector(state => ({ ...state.qrError })); // Get this form redux stage.



useEffect(() => {
    if (trigger) {
        if (response?.success === true) {
            setSneakOpen(true);
            setMessage(response?.message);
            setType("success");
            setTrigger(false)
        } else if (response?.success === undefined) {
            setSneakOpen(true);
            setMessage("Error! Please try again later");
            setType("error");
            setTrigger(false)
        }
    }
}, [response]); //Don't add trigger here. It will cause error.

<CustomSnackbar
    sneakOpen={sneakOpen}
    setSneakOpen={setSneakOpen}
    message={message}
    type={type}
/>