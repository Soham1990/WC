var template = document.createElement('template')

template.innerHTML = `
<style>
    body {
        display: block;
        margin: 48;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        box-sizing: border-box;
        font-family: sans-serif;

        --ecalc-primary-color : #fc0303;
        --ecalc-term-text-color : #000;
    }

    body.blue {
        --ecalc-primary-color : #0377fc;
        --ecalc-term-text-color : #000;
    }

    body.dark {
        --ecalc-primary-color : #140202;
        --ecalc-term-text-color : #000;
    }

    body.orange {
        --ecalc-primary-color : #ff7b0a;
        --ecalc-term-text-color : #000;
    }

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, .125);
        border-radius: .25rem;
        box-sizing: border-box;
        margin: 3rem;
    }

    li {
        display: inline;
        padding: 10px;
        font-size: 14px;
    }

    .card-header {
        color: var(--ecalc-primary-color);
        margin-bottom: 20px;
        cursor: pointer;
    }

    .header1 {
        overflow: hidden;
        position: relative;
        margin-bottom: 15px;
        cursor: pointer;
        font-family: sans-serif;
    }

    table th {
        border: 1px solid black;
        margin: auto;
        display: table;
        padding-right: 100px;
    }
    .circle-depo .text {
        width: 175px;
        border-radius: 110px;
        margin-left: 22px;
        height: 125px;
        margin-left: 17px;
        margin-top: 52px;
        font-size: 1.2em;
    }

    i {
        font: size 20px;
        color: red;
    }

    .text1 {
        margin-top: -60px;
        margin-left: 28px;
        color: gray;
        font-size: 1.1em;
    }

    .float-container {
        border: 3px solid #fff;
        padding: 20px;
    }

    .circle-depo {
        width: 180px;
        border: 3px solid var(--ecalc-primary-color);
        border-radius: 100px;
        height: 180px;
    }

    .float-childs {
        width: 18%;
        float: left;
        padding: 0%;
        justify-content: space-around;
        margin-right: 10px;
        padding-right: 15px;
    }


    .float-child-1 {
        padding-top: -10px;
        font: size 0.9em;
        padding-top: 38px;
    }

    .amount {
        color: #bba8a8;
        font-size: 1em;
        margin: 0;
    }

    .amount1 {
        font-size: 1.1em;
        border-right: 1px solid rgb(211, 209, 209);
        margin: 0;
    }

    .amount2 {
        font-size: 1.1em;
        margin: 0;
        border-right: 1px solid rgb(211, 209, 209);
    }

    .amount3 {
        font-size: 1.1em;
        margin: 0;
        border-bottom: 1px solid rgb(211, 209, 209);
    }

    .amount4 { font-size: 1.1em; margin: 0; }

    .line {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .hhh { border-top: 1px solid rgb(180, 177, 177); margin-right: 10px; }

    body {
      display: block;
      margin: 48;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      box-sizing: border-box;
  }

  .main-container {
    margin-top: 100px;
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      //border: 1px solid rgba(0, 0, 0, .125);
      border-radius: .25rem;
      box-sizing: border-box;
  }

  .my-5 { margin: 3rem 3rem 0 3rem; padding: 12; }

  .slider-container { width: 100%; margin-top: 20px; }

  .value-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
  }

  .heading {
      font-size: 1.4rem;
      text-align: center;
      padding: 0;
      margin: 0;
      cursor: pointer;
      font-family: var(--scf-wc-title-font-family), "SantanderHeadline", sans-serif;
  }

  .value-container .heading { margin-top: 40px; }

  .value1 {
      flex-direction: row-reverse;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px 1px;
      border: 1px solid #dbdbdb;
      margin-top: 40px;
  }

  #demo {
      font-size: 25px;
      font-family: sans-serif;
      padding-left: 15px;
      padding-right: 10px;
  }

  .slider {
      border-radius: 3px;
      width: 100%;
      height: 5px;
      color: gray;
      cursor: pointer;
      accent-color: var(--ecalc-primary-color);
      font-family: sans-serif;
      cursor: pointer;
      align-items: center;
      position: relative;
  }

  .euro { font-size: 1.5em; padding-left:10px; }

  .list {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      margin: 10px 0 0;
      padding-left: 0px;
  }

  .items { font-size: 1em; cursor: pointer; }
 
    .zero h3 { font-size: 1.4em; }

    .full-width { display: flex; }

.first {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-right:50px;
    margin-top: 20px
}

.sub-first h5 {
    color: #afafaf;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 20px;
}

.second {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 16px
}

.sub-second { padding-right: 3rem; }
.sub-fourth { padding-right: 3rem; }

.sub-third h5 {
    color: #b7b0b0;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 16px;
}

.sub-second h5 { font-size: 1.1rem; margin-top: 0; margin-bottom: 16px; }

.sub-fourth h5 { font-size: 1.2rem; margin-top: 0; margin-bottom: 16px; }

.child{
    position: relative;
    display: inline-flex;
    flex-direction: column;
    /* width: 130px !important; */
    height: 100px;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    background-color: transparent;
    transition: border 0.2s ease-in-out;
    cursor: pointer;
    margin-right: 10px;
    min-width:130px;
   }

   .child:hover { border-color: var(--ecalc-primary-color); }
</style>
    
<div class="card">
    <ul>
        <i class="fa fa-search"></i>
        <li class="card-header">Explore finance products</li><br><br>
        <li class="header1">PURCHASE PLAN</li>
        <hr>
        <div class="float-container">
            <div class="float-childs">

                <div class="circle-depo">
                    <div class="text">
                        <h2>&pound32,990.00</h2> <br>
                        <p class="text1">Cash price</p>
                    </div>

                </div>

            </div>
            <div class="float-childs">
                <div class="float-child-1">
                    <div class="line">
                        <p class="amount">Amount of credit</p>
                        <p class="amount1">&pound25,000.00</p>
                        <span class="hhh"></span>
                    </div>
                    <div style="margin-top:2rem">
                        <p class="amount">Monthly payments</p>
                        <p class="amount2">&pound666.24</p>

                    </div>
                </div>

            </div>
            <div class="float-childs">
                <div class="float-child-1">
                    <div class="line">

                        <p class="amount">Representative</p>
                        <p class="amount3">13.40 % APR</p>
                    </div>
                    <div style="margin-top:2rem">
                        <p class="amount">Total amount payable</p>
                        <p class="amount4">&pound39,437.16</p>
                    </div>
                </div>

            </div>
        </div>
    </ul>

</div>

<div class=" my-5">

    <div class="slider-container">
        <div class="value-container">

            <label class="heading">Customer deposit</label>
            <div class="value">

                <div class="value1">
                    <span id="demo">7990</span>
                    <span class="euro">&pound</span>
                </div>
            </div>
            <div class="slider">
                <input type="range" min="7990" max="31990" value="0" class="slider" id="myrange">
                <ul class="list">
                    <li class="items">&pound7990</li>
                    <li class="items">&pound1400</li>
                    <li class="items">&pound20000</li>
                    <li class="items">&pound26000</li>
                    <li class="items">&pound31990</li>
                </ul>

            </div>
        </div>
    </div>  
    
`;

class CustomerDeposite extends HTMLElement {
    constructor () {
        super();

        console.log(555)
        this._shadowRoot = this.attachShadow({mode: 'open'})
        this._shadowRoot.appendChild(template.content.cloneNode(true))
    }


     // let output = document.getElementById("demo")
    // let slider = document.getElementById("myrange").
    // oninput = function () {
    //     let value = (this.value - this.min) / (this.max - this.min) * 100
    //     output.innerHTML = this.value
    // }

    connectedCallback() {
    // let output = this._shadowRoot.getElementById('demo')
        console.log(13311);
        // this._shadowRoot.getElementById('myrange').oninput = function() {
        // console.log(111);
        // let value = (this.value - this.min) / (this.max - this/min) * 100;
        // output.innerHTML = this.value;
    // }
    }   
}


window.customElements.define('customer-deposite', CustomerDeposite);