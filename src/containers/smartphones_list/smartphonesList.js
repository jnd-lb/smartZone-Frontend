import React, { Component } from 'react'
import SmartphoneItem from "../../components/smartphone_item/smartphoneItem"
import cx from "classnames";
import classes from './smartphonesList.module.css';
import axios from "axios";
import Tools from "../../components/tools/tools"
import InfiniteScrolling from "react-infinite-scroll-component";
import Loading from "../../components/loading/loading";

export default class SmartphonesList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: true,
            page: 1,
            selectedBrand: "",
            settedPrice: -1,
            willFilterData: false,
            version:"old"
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state === nextState) {
            return false;
        }
        console.log("rerendering the componenets");
        return true;
    }

     toggleFilter =async (e) => {
        console.log("the current state Before setting the state",this.state);
        const newState = { ...this.state };
        newState.page = 1;
        newState.version = "new";
        newState.willFilterData = e.target.checked;
        newState.data=[];

        await this.setState(newState);
        
        this.getPhones();
    }
    async componentDidMount() {
        
        this.getPhones();

        this.changeBrand = async (event) => {
            this.setState({ selectedBrand: event.target.value });
            console.log("Change Brand",this.state.willFilterData);
            if(this.state.willFilterData)  {
                await this.setState({data:[],page:1});
                this.getPhones();
            }
        }

    }

    getPhones() {
        if (!this.state.hasMore) return;
        let page = this.state.page;

        let params = {
            offset: (page - 1) * 10,
        }

        if (this.state.willFilterData) {
            console.log("selected brand:", this.state.selectedBrand);
            if (this.state.selectedBrand !== "") params.brand = this.state.selectedBrand;
            if (this.state.settedPrice > -1) params.pricemax = this.state.settedPrice;
        }

        console.log("params in smartPhones:", params);
        axios({
            method: "GET",
            url: "http://localhost:8000/model",
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
                        return <SmartphoneItem key={el._id} smartphone={el} />
                    })}
                </InfiniteScrolling>
            )
        }
        return (
            <div className={cx(classes.MainContainer, "container")}>
                <Tools
                    change={this.changeBrand}
                    toggleFilter={this.toggleFilter}
                    value={this.state.selectedBrand}
                    isChecked={this.state.willFilterData} />
                <RenderSmartphoneItem />
            </div>
        )
    }
}