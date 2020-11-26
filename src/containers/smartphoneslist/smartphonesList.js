import React, { Component } from 'react'
import SmartphoneItem from "../../components/smartphone_item/smartphoneItem"
import cx from "classnames";
import classes from './smartphonesList.module.css';
import axios from "axios";

export default class SmartphonesList extends Component {
    constructor(){
        super();
        this.state={
            loading: true,
            data:null,
            hasMore:true,
            page: 0,
            prevY: 0
        }

        this.lastElementRef = React.createRef()
    }


    async componentDidMount(){
            const apiModelsUrl = "http://localhost:8000/model";
            fetch(apiModelsUrl)
             .then(async (response)=>{
                const data = await response.json();
                console.log(data.message);
                
                const newState = {...this.state};
                newState.data = data.data;
                newState.loading =false;

                this.setState(newState);
            })
            .catch((e)=>{
                console.log("Error 👉 ",e);
            }) 
            
/* 
            var options = {
                root: null,
                rootMargin: "0px",
                threshold: 1.0
              };
              
              this.observer = new IntersectionObserver(
                this.handleObserver.bind(this),
                options
              );
              this.observer.observe(this.loadingRef); */
    }

    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
          const lastMobile = this.state.data[this.state.photos.length - 1];
          const curPage = lastMobile._id;
          this.getPhotos(curPage);
          this.setState({ page: curPage });
        }
        this.setState({ prevY: y });
      }

    getPhones(page){
        this.setState({loading:true})
        axios({
            method:"GET",
            url:"http://localhost:8000/model",
            params:{offset:(page-1)*10}
        })
        .then((res)=>{
            const newState = {...this.state};
            newState.data.push(res.data.data);
            newState.hasMore = res.data.data.length > 0;
            this.setState(newState);
            console.log(res.data.data);
            this.setState({ loading: false });
        })
        .catch((e)=>{
            console.log("Error 👉 ",e);
        })
    }

    render() {
        const RenderSmartphoneItem = ()=>{
            return ( 
                <>
                    {this.state.data.map((el,index)=>{
                        if(index+1 == this.state.data.length)
                        return <SmartphoneItem ref={this.lastElementRef}  key={el._id} smartphone={el} />
                        return <SmartphoneItem  key={el._id} smartphone={el} />
                    })}
                </>)
        }
        return (
            <div className={cx(classes.MainContainer,"container")}>
                {(this.state.loading)?"loading...":<RenderSmartphoneItem/>}
            </div>
        )
    }
}