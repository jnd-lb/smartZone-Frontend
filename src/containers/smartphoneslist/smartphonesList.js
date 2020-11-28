import React, { Component } from 'react'
import SmartphoneItem from "../../components/smartphone_item/smartphoneItem"
import cx from "classnames";
import classes from './smartphonesList.module.css';
import axios from "axios";
import Tools from "../../components/tools/tools"

export default class SmartphonesList extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            data: [],
            hasMore: true,
            page: 1,
            selectedBrand:"",
            settedPrice:-1
        }
        
        this.getPhones();
        
        this.changeBrand= (event)=>{
            this.setState({ selectedBrand: event.target.value });
        }
        
    
        this.getFilteredDate= ()=>{
            this.setState({ page: 1 });
            this.getPhones(this.state.selectedBrand, this.state.settedPrice);
        }
        
        this.setElementToBeObserved = (e) => {
            if (this.state.loading) return;
            var options = {
                root: null,
                rootMargin: "0px",
                threshold: 1.0
            };

            this.observer = new IntersectionObserver(
                (entries, observer) => {
                    if (entries[0].isIntersecting) this.getPhones();
                },
                options
            );
            console.log("this ref", e);
            this.observer.disconnect();
            this.observer.observe(e);
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.state == nextState){
            return false;
        }
        console.log("rerendering the componenets");
        return true;
    }

    async componentDidMount() {
        //   this.getPhones(1);
        /*             const apiModelsUrl = "http://localhost:8000/model";
                    fetch(apiModelsUrl)
                     .then(async (response)=>{
                        const data = await response.json();
                        console.log(data);
                        
                        const newState = {...this.state};
                        newState.data = data.data;
                        newState.loading =false;
        
                        this.setState(newState);
                    })
                    .catch((e)=>{
                        console.log("Error 👉 ",e);
                    })  */
    }

    getPhones(brand = "", pricemax = -1) {
        let page = this.state.page;
        this.setState({ loading: true });

       let params = {
            offset: (page - 1) * 10,
        }
        if (brand !== "") params.brand = brand;
        if (pricemax > -1) params.pricemax = pricemax;

        axios({
            method: "GET",
            url: "http://localhost:8000/model",
            params: {
                ...params
            }
        })
            .then((res) => {
                /* const newState = {...this.state};
                   newState.page = newState.page+1;
                   newState.data.push(...res.data.data);
                   newState.hasMore = res.data.data.length > 0;
                   this.setState(newState);
                   this.setState({ loading: false }); */
                let data = res.data.data;

                this.setState({
                    loading: false,
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
            console.log("RenderSmartphoneItem");
            return (
                <>
                    {this.state.data.map((el, index) => {
                        if (index + 1 === this.state.data.length) {
                            console.log("last one");
                            return <SmartphoneItem setElementToBeObserverd={this.setElementToBeObserved} lastItem={true} key={el._id} smartphone={el} />
                        }
                        return <SmartphoneItem key={el._id} smartphone={el} />
                    })}
                </>
            )
        }
        return (
            <div className={cx(classes.MainContainer, "container")}>
                <Tools change={this.changeBrand} value={this.state.selectedBrand} />
                {(this.state.loading) ? "loading..." : <RenderSmartphoneItem />}
            </div>
        )
    }
}