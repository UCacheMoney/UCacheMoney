import BarGraph from './components/barGraph'
import PieGraph from './components/pieGraph'

export default function GraphPage(){
//     function pieClicked(){
//         Observer.notify("Pie")
//     }

//     function lineClicked(){
//         Observer.notify("Line")
//     }

//     function barClicked(){
//         
//     }

    

    return (
            <div className="Graph Page">
                    <a>You are on the graph page</a>
                    <main>
                        <body>
                        <section className="body">
                            <button onClick={PieGraph}>Bar Graph</button>
                            <BarGraph/>
                            <PieGraph/>
                        </section>
                        </body>
                    </main>
                </div>
    );
}