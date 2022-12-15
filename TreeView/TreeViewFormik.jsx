import React, { useEffect, useState } from 'react'
import { Box, FormControl, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTreeViewLocation, getLocationTreeView } from "@Services/Slices/TreeViewStatusSlice";
import {
    TreeViewDropDown
} from "@Metronic/layout/components/custom/css/ListForm_Styles";

const useStyles = makeStyles((theme) => ({

}))

const TreeViewGlobal = ({ setFieldValue, name, handleLocation }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [reformedDatas, setReformedDatas] = useState();

    console.log("reformed Data", reformedDatas)

    useEffect(() => {
        dispatch(getTreeViewLocation());
        dispatch(getLocationTreeView());
        // console.log("useEffect Activated ");
    }, []);

    const { datas } = useSelector(state => state.assetStatus);

    //--------------------Formatting Location Tree View---------------------------
    //-----------------Require - title, value, id, children[]---------------------
    useEffect(() => {
        let treeViewData = []
        datas.forEach(item => {
            let storage = treeViewData.find(z => { return z.title === item.Location_Name })
            if (!storage) {
                storage = {
                    title: item.Location_Name,
                    value: item.Location_ID,
                    children: []
                }
                treeViewData.push(storage)
            }
            let branch = storage.children.find(c => { return c.title === item.Branch_Name })
            if (!branch) {
                branch = {
                    title: item.Branch_Name,
                    value: item.Branch_ID,
                    children: []
                }
                storage.children.push(branch)
            }
            let department = branch.children.find(x => { return x.title === item.Department_Name })
            if (!department) {
                department = {
                    title: item.Department_Name,
                    value: item.Department_ID,
                    children: []
                }
                branch.children.push(department)
            }
            department.children.push({ value: item.Section_ID, title: item.Section_Name })
        })
        setReformedDatas(treeViewData)
    }, [datas])

    return (
        <Box >
            <FormControl style={{ width: "100%" }}>
                <TreeViewDropDown
                    dropdownStyle={{
                        position: "relative",
                        maxHeight: 400,
                        overflow: "auto",
                        minWidth: 250
                    }}
                    name="Location"
                    id="Location"
                    treeData={reformedDatas}
                    placeholder="Location"
                    onChange={e => {
                        setFieldValue(name, e)
                    }}
                />
            </FormControl>
        </Box>
    )
}

export default TreeViewGlobal