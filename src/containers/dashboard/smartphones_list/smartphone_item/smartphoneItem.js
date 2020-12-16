import React, {Component} from 'react';
import cx from "classnames";
import SpecificationsGrid from "./specifications_grid/specificationsGrid";
import Classes from "./smartphoneItem.module.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';


class SmartphoneItem extends Component{

   constructor(props){
       super(props);
       this.state={
           readOnly:true,
           smartphone:props.smartphone
       }
   }

    render(){
            const handleChange =  (value,type)=>{
              console.log(value," and the type is:",type);
              const newSmartphone = {...this.state.smartphone};
               this.setState({smartphone:newSmartphone});
              newSmartphone[type] = value;
              console.log(newSmartphone);
            }

        return (
            <div key={this.props.key} className={cx("container", Classes.SmartphoneItem,(!this.state.readOnly)?Classes.Editable:"")}>
                <div className={cx("row")}>
                    <div className={cx("text-center", "flex-column", "col-md-3", "col-sm-12", "d-flex", "justify-content-center", "align-items-center")}>
                        <img src={this.state.smartphone.imgUrl} className={cx("img-fluid", "H1")} />
                        <h1 className={cx(Classes.H1)}>{this.state.smartphone.modelName}</h1>
                        <div className={(!this.state.readOnly)?"d-none":"d-block"}>
                            <button onClick={()=>{this.setState({readOnly:false})}}className="btn btn-primary mr-4">
                                <EditIcon />
                            </button>
                            <button onClick={this.props.showDialog} className="btn btn-danger">
                                <DeleteIcon />
                            </button>
                        </div>
                        <div className={(this.state.readOnly)?"d-none":"d-block"}>
                            <button onClick={()=>{this.setState({readOnly:false})}}className="btn btn-success mr-4">
                                <CheckIcon />
                            </button>
                            <button onClick={()=>{this.setState({readOnly:true})}} className="btn btn-danger">
                                < ClearIcon/>
                            </button>
                        </div>
                    </div>
                    <div className={cx("col-md-9", "col-sm-12")}>
                        <SpecificationsGrid handleChange={handleChange} readOnly={this.state.readOnly} smartphone={this.state.smartphone} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SmartphoneItem
