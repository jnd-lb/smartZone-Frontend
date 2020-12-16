import React, { Component } from 'react'
import SmartphoneItem from "./smartphone_item/smartphoneItem"
import cx from "classnames";
import classes from './smartphonesList.module.css';
import axios from "axios";
import { withRouter } from "react-router-dom";
import Tools from "../../../components/tools/tools"
import InfiniteScrolling from "react-infinite-scroll-component";
import Loading from "../../../components/loading/loading";
import AddIcon from '@material-ui/icons/Add';



class SmartphonesList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: true,
            page: 1,
            selectedBrand: "",
            selectedPrice: -1,
            willFilterData: false,
            showDialog: false,
            modelNameToBeDeleted: "",
            toBeDeletedModelId: ""
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state === nextState) {
            return false;
        }
        console.log("rerendering the componenets");
        return true;
    }

    toggleFilter = async (e) => {
        console.log("the current state Before setting the state", this.state);
        const newState = { ...this.state };
        newState.page = 1;
        newState.hasMore = true;
        newState.willFilterData = e.target.checked;
        newState.data = [];
        await this.setState(newState);
        this.getPhones();
    }

    async componentDidMount() {
        this.getPhones();
        this.changeBrand = async (event) => {
            const newState = { ...this.state };
            newState.selectedBrand = event.target.value;
            newState.hasMore = true;
            await this.setState(newState);
            console.log("Change Brand", this.state.willFilterData);
            if (this.state.willFilterData) {
                await this.setState({ data: [], page: 1 });
                this.getPhones();
            }
        }
    }

    priceChange = async (e) => {
        console.log("Pricechange", e.target.value);
        const newState = { ...this.state }
        newState.selectedPrice = e.target.value;
        await this.setState(newState);
    }

    //apply the changes onblur
    applyPriceChange = async () => {
        if (!this.state.willFilterData) return;
        const newState = { ...this.state }
        newState.data = [];
        newState.page = 1;
        newState.hasMore = true;
        await this.setState(newState);
        this.getPhones();
    }

    getPhones() {
        if (!this.state.hasMore) { console.log("Do not has more"); return; }
        let page = this.state.page;
        let params = {
            offset: (page - 1) * 10,
        }

        if (this.state.willFilterData) {
            console.log("selected brand:", this.state.selectedBrand);
            if (this.state.selectedBrand !== "") params.brand = this.state.selectedBrand;
            if (this.state.selectedPrice > -1) params.pricemax = this.state.selectedPrice;
        }

        console.log("params in smartPhones:", params);
        axios({
            method: "GET",
            url: "http://localhost:8000/admin/model",
            params: {
                ...params
            }
        })
            .then((res) => {
                let data = res.data.data;
                this.setState({
                    hasMore: data.length > 0,
                    page: this.state.page + 1,
                    data: [...this.state.data, ...data]
                });
            })
            .catch((e) => {
                console.log("Error 👉 ", e);
            })
    }





    render() {
        const RenderSmartphoneItem = () => {
            return (
                <InfiniteScrolling loader={<Loading />} dataLength={this.state.data.length} hasMore={true} next={() => this.getPhones("infinit scrolling")}>
                    {this.state.data.map((el, index) => {
                        return <SmartphoneItem key={el._id}
                            showDialog={hideShowDialog.bind(this, el._id, el.modelName)}
                            smartphone={el} />
                    })}
                </InfiniteScrolling>
            )
        }

        const performDelete = () => {
            const id = this.state.toBeDeletedModelId;
            hideShowDialog();
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const token = localStorage.getItem("token");
            myHeaders.append("token", token);
            myHeaders.append("Access-Control-Allow-Headers", "DELETE");


            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:8000/admin/model/" + id, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("Perform Delete function", result);
                    if (result.status === 200) {
                        const newArray = this.state.data.filter(item=>{
                            return item._id !== id
                        })

                        this.setState({data:newArray})
                    }
                    if (result.status === 401 || result.status === 400) {
                        this.redirectToLogin();
                    }
                    if (result.status === 500) {

                    }
                })
                .catch(error => console.log('error', error));
        }

        const hideShowDialog = async (id = null, modelName = null) => {
            await this.setState({ showDialog: !this.state.showDialog, toBeDeletedModelId: id, modelNameToBeDeleted: modelName });

        }

        const Modal = () => {
            return (
                <div className={classes.Modal} >
                    <div className={classes.ModalTitle}>
                        Are you sure you want to delete {this.state.modelNameToBeDeleted}
                    </div>
                    <div className={classes.Title}>
                        <p>{this.state.toDeleteModel}</p>
                        <div className={classes.ModalContent}>
                            <button className="btn btn-danger margin" onClick={performDelete}>Yes</button>
                            <button className="btn btn-primary ml-5" onClick={() => { this.setState({ showDialog: false }) }}>No</button>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className={cx(classes.MainContainer, "container")}>
                {(this.state.showDialog) ? <Modal /> : null}
                <Tools
                    changeBrand={this.changeBrand}
                    selectedBrand={this.state.selectedBrand}
                    toggleFilter={this.toggleFilter}
                    selectedPrice={this.state.selectedPrice}
                    applyPriceChange={this.applyPriceChange}
                    priceChange={this.priceChange}
                    isChecked={this.state.willFilterData} />
                {console.log("RenderSmartPhones", RenderSmartphoneItem())}
    
                <button  className={cx(classes.Add,"btn","btn-success")} onClick={()=>{this.props.history.push("/dashboard/add");}}><AddIcon/></button>
                <RenderSmartphoneItem />
            </div>
        )
    }
}

export default withRouter(SmartphonesList)