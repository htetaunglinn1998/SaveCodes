import { getTreeViewLocation } from "@Services/Slices/TreeViewStatusSlice";
import {
    TreeViewDropDown
} from "@Metronic/layout/components/custom/css/ListForm_Styles";


//----------------------------Inside components-------------------
const [treeViewData, setTreeViewData] = useState();

useEffect(() => {
    dispatch(getTreeViewLocation());
    // console.log("useEffect Activated ");
}, []);

const { treeViewLocation } = useSelector(state => state.assetStatus);


//--------------------Location Tree View---------------------------
useEffect(() => {
    const setting = [];
    const ApiLocationData = [...treeViewLocation];
    const TreeViewData = ApiLocationData.sort(function (obj1, obj2) {
        return obj1.Parent_ID - obj2.Parent_ID;
    });

    const buildNestedTree = (items, data) => {
        // console.log(items);
        if (items) {
            if (items.children.length) {
                buildNestedTree(items.children[0], data);
            } else {
                const filtered = TreeViewData.filter(
                    one => one.Parent_ID === items.value
                );
                // console.log(filtered);

                filtered.map(one => {
                    const title = one.Asset_Location;
                    const value = one.AssetLocation_ID;
                    const id = one.Parent_ID;
                    const children = [];
                    items.children.push({
                        ...one,
                        title: title,
                        value: value,
                        id: id,
                        children: children
                    });
                });
            }
        }
    };
    TreeViewData.map(tree => {
        if (tree.Parent_ID === 0) {
            // console.log(tree);
            setting.push({
                title: tree.Asset_Location,
                value: tree.AssetLocation_ID,
                id: tree.Parent_ID,
                group_List: tree.Group_List,
                children: []
            });
        } else {
            let index = setting.findIndex(
                list => list.group_List === tree.Group_List
            );
            // console.log(setting);
            buildNestedTree(setting[index], tree);
        }
    });


    //--------------------Location Tree View---------------------------

    // console.log(setting);
    setTreeViewData(setting);
}, [treeViewLocation]);

//-----------------------------Before return()--------------------------

<Box className={classes.dropdownField}>
    <FormControl style={{ width: "159px" }}>
        <TreeViewDropDown
            dropdownStyle={{
                position: "relative",
                zIndex: 10000,
                maxHeight: 400,
                overflow: "auto",
                minWidth: 250
            }}
            name="Location"
            id="Location"
            treeData={treeViewData}
            placeholder="Location"
            onChange={e => {
                // console.log("event", e);
                setFieldValue("Location", e);
            }}
        />
    </FormControl>
</Box>