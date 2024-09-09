import React, { Component } from "react"
import Test from "./Test"

export class FirstComponet extends Component{
    constructor(){
        super()
        this.state = {
        news : [  
          {  
            name: 's9645 sfmpsdmfpsmfpmspf',  
            related: 'soinfgvoengoenondoivoedgv',  
            success: 'sdokvfposjvojovjovjdojv jvopiejfovjer0fp-fi-',  
            goddd: 'spodfkjpwjfopjwofjwofjpwjfnbnbnbnirjivjf',  
            fucccc: 'spowkedpwjeopdjpwjd',  
          },  
          {  
            name: 's55edofijpwj4830850398',  
            related: 's23424343545',  
            success: 's454666',  
            goddd: 'sprgpoekpogkepokgprekpg',  
            fucccc: 's',  
          }  
        ]   
      }
    }
  render() { const {news} = this.state
            const newsList = news.map((index,item)=>{
              return <Test key={index} newsData={item} i={index}
                />
            })           

          
  return(<>
  {newsList}
  </>
  )

  }
}
export default FirstComponet

// import React, { Component } from "react";  

// export class FirstComponent extends Component {  
//   constructor() {  
//     super();  
//     this.state = {  
//       news: [  
//         {  
//           name: 's9645',  
//           related: 's',  
//           success: 's',  
//           goddd: 's',  
//           fucccc: 's',  
//         },  
//         {  
//           name: 's55',  
//           related: 's',  
//           success: 's',  
//           goddd: 's',  
//           fucccc: 's',  
//         }  
//       ]  
//     };  
//   }  

//   render() {  
//     const { news } = this.state;  
//     const newsList = news.map((item, index) => {  
//       return (  
//         <p key={item.name}>  
//           {item.name} : {index + 1}  
//         </p>  
//       );  
//     });  

//     return (  
//       <div>{newsList}</div>  
//     );      
//   }  
// }  

// export default Component;  