/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1>
 * <h12>I am h2 tag</h2>
 * </div>
 * </div> 
 * 
 * ReactElement(object) => HTML(Browser Understands)
 */

const parent=React.createElement("div",
                                  {id:"parent"},
                                  [React.createElement("div",
                                  {id:"child"},
                                  [React.createElement("h1",{},"I am h1 tag."),React.createElement("h2",{},"I am h2 tag.")]
                                ),
                                React.createElement("div",
                                  {id:"child2"},
                                  [React.createElement("h1",{},"I am h1 tag."),React.createElement("h2",{},"I am h2 tag.")]
                                )]
                                );

// const heading=React.createElement("h1",
// {id:"heading",xyz:"abc"},//attribute
// "Hellow World from React!");

// console.log(heading);//object

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);