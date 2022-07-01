import { useState } from "react";
import { Tabs, Tab} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";




export default function Menu(props){
    const menus = props.menus.map(menu=>{
        if( menu.active !== false && menu.active !== true ){
            menu.active = props.parent !== undefined;
        }
        return menu;        
    })

    const [ tab, setTab ] = useState(menus.findIndex(menu=>menu.active)+1)

    console.log(menus, tab)
    const handleChange = (event, value) => {
        setTab(value);
    }

    const onSelect = () => {
        
    }
    
    return(<Tabs
        orientation="vertical"
        variant="menu-multiple"
        value={tab}
        indicatorColor={props.indicatorColor}
        onChange={handleChange}
        sx={props.border?{ borderRight:1, borderBottom:1, borderColor:'divider' }:{}}
    >
        {
            props.menus.map(menu=>{
                if(menu.children && menu.children.length>0 ){
                    return(
                    <Tab 
                        label={
                            [
                                <Tab 
                                    label={menu.label} 
                                    key={'tab-'+menu.label}
                                    onClick={onSelect} />,
                                <Menu 
                                    menus={menu.children} 
                                    border={false} 
                                    key={'menu-'+menu.label} 
                                    indicatorColor='transparent'
                                    parent={menu}
                                    onClick={onSelect}/>
                            ]
                        }
                        key={'sub-tab-'+menu.label}
                    />);
                }else{
                    return(
                        <Tab 
                            label={
                                (props.parent?.children?.length>0)?
                                    [<span style={{display:'inline-flex', alignItems:'center'}}><ArrowRight/>{menu.label}</span>]:
                                    menu.label} 
                            key={'tab-'+menu.label} 
                            onClick={onSelect} />)
                }
            })
        }
    </Tabs>)
}