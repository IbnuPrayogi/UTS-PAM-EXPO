const Css = `
<style>
    .App-header {
        background-color: rgb(118, 211, 92);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: Left;
        font-size: calc(10px + 2vmin);
        color: rgb(0, 0, 0);
        font-weight: bolder;
        height: 50px;
        text-align: left;
        padding: 2px;
    
    }
    
    .App{
        width: 100%;
        height: 100%;
        border: blue solid ;
        background-image: url(./bg.jpg);
        background-position: center;
    
    }
    .App-Body{
        display:unset !important;
        font-size: calc(10px + 2vmin);
        color: blue solid;
        font-weight: bolder;
        border: solid;
    
    }
    
    body {
        margin: 0px ;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    .content{
        border: red solid;
        color: rgb(0, 0, 0);
        padding: 2px;
        font-weight: lighter;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    
    
    .content-item{
        border-bottom: solid;
        background-color: rgb(118, 211, 92);
    }
    
    
    #title{
        float: left;
        border: solid;
        border-radius: 3px;
        padding: 3px;
        background-color:white;
    }
    
    #date{
        float: right;
        position: relative;
        right: 10px;
        position: absolute;
        border: solid;
        border-radius: 8px;
    }
    
    .content-list{
        border: red solid;
        justify-content: space-between;
        align-items: center;
        padding-left: 0px;
        list-style-type: none;
        display: flex;
        
    }
    .list-content{
        border: solid black 5px;
        border-radius: 5px;
        background-color: rgb(118, 211, 92);
        align-content: center;
        margin: 10px;
        padding: 15px 25px;
        width: 25%;
        text-align: center;
    
    }
</style>
`;
export default Css;