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
            data:[],
            hasMore:true,
            page: 1
        }
        this.loadingRef=null

      this.getPhones();

      this.setElementToBeObserved= (e)=>{
          if(this.state.loading) return;
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
          };
            
          this.observer = new IntersectionObserver(
            (entries,observer)=>{
               if(entries[0].isIntersecting) this.getPhones();
            },
            options
          );
         
          console.log("this ref",this.loadingRef);

          this.observer.observe(e);
    }
    }


    async componentDidMount(){
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




    getPhones(){
        let page = this.state.page;
        this.setState({loading:true})
        axios({
            method:"GET",
            url:"http://localhost:8000/model",
            params:{offset:(page-1)*10}
        })
        .then((res)=>{
            const newState = {...this.state};
            newState.page = newState.page+1;
            newState.data.push(...res.data.data);
            newState.hasMore = res.data.data.length > 0;
            this.setState(newState);
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
                        if(index+1 === this.state.data.length){
                            console.log("last one");
                            return <SmartphoneItem setElementToBeObserverd={this.setElementToBeObserved} lastItem={true}  key={el._id} smartphone={el} />
                        }
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