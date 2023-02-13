var template = document.createElement('template')
template.innerHTML = `
    <style>
        .root { margin: 4rem 0; } .container { width: 95%;margin:auto }
        #mainDiv {
            font-family: sans-serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            box-sizing: border-box;
            font-family: sans-serif;
    
            --ecalc-primary-color : var(--primary-color,#fc0303);
            --ecalc-term-text-color : var(--term-text-color,#000);
        }
    
        #mainDiv.blue { --ecalc-primary-color : var(--primary-color,#0377fc); --ecalc-term-text-color : var(--term-text-color,#000); }
        #mainDiv.dark { --ecalc-primary-color : var(--primary-color,#140202); --ecalc-term-text-color : var(--term-text-color,#000); }
        #mainDiv.orange { --ecalc-primary-color : var(--primary-color,#ff7b0a); --ecalc-term-text-color : var(--term-text-color,#000); }
    
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
    
        li { display: inline; padding: 10px; font-size: 14px; }
    
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
    
        i { font: size 20px; color: red; }
    
        .text1 {
            margin-top: -60px;
            margin-left: 28px;
            color: gray;
            font-size: 1.1em;
        }
    
        .float-container { border: 3px solid #fff; padding: 20px; }
    
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
        margin-top: 70px;
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
    
      .my-5 { margin: 1rem 3rem 0 3rem; }
      .slider-container { width: 100%; }
    
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
          margin-top: 10px;
      }
    
      .euro { font-size: 1.5em; padding-left:10px; }
    
      .list {
          display: flex;
          justify-content: space-between;
          list-style-type: none;
          margin: 10px 0 0;
          padding-left: 0px;
      }
    
      .items { font-size: 1em; cursor: pointer; }.zero h3 { font-size: 1.4em; }
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
    
    .sub-second { padding-right: 3rem; } .sub-fourth { padding-right: 3rem; }
    
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
        border: 1px solid #ecebee;
        background-color: transparent;
        transition: border 0.2s ease-in-out;
        cursor: pointer;
        margin-right: 10px;
        min-width:130px;
       }
    
       .child:hover { border-color: var(--ecalc-primary-color); }

       /* CUSTOMER DEPOSITE */

       /* TERM LIST */
       .parag {
            margin-top: 30px;
            color: gray;
            font-size: 1em;
        }
        .outer {
            display: flex;
            overflow-x: hidden;
            overflow-y: hidden;
            padding: 0 60px;
        }        
        .inner {
            flex: 0 0 25%;
            height: 100px;
            margin: 10px;
        }
        .paddle {
            cursor: pointer;
            position: absolute;
            top: 50px;
            bottom: 0;
            width: 30px;
            height: 20px;
        }
        .lefty { left: 0; } .righty { right: 0; }
        .val {
            font-family: sans-serif;
            font-size: 0.7cm;
            font-weight: 700;
            color: var(--ecalc-term-text-color);
        }
        .month {
            color: gray;
            font-family: sans-serif;
        }
        
        #left-button {
            width: 50px;
            height: 100%;
            border: none;
            color: red;
        }
        #right-button {
            width: 50px;
            height: 100%;
            border: none;
            color: red;
        }
        
        .control-left {
            position: absolute;
            height: 100px;
            left: 0;
            top: 29px;
            z-index: 100;
        }
        .control-right {
            position: absolute;
            height: 100px;
            right: 0;
            top: 29px;
        }
        
        .info-div { margin: 50px 3rem 0 3rem; }
        .sectionLabel { font-size: 1.4rem; }
      
       /* TERM LIST */

       /* CALCULATIONS */
       .full-width {
            display: flex;
        }
        .sub-second {
            padding-right: 3rem;
        }
        .sub-second h5 {
            font-size: 1.1rem;
            margin-top: 0; margin-bottom: 16px;
        }
        .second {
            width: 50%;
            display: flex;
            justify-content: space-between;
            margin-top: 16px
        }
        .sub-third h5 {
            color: #b7b0b0;
            font-size: 1.1rem;
            font-weight: 500;
            margin-top: 0;
            margin-bottom: 16px;
        }
        .sub-fourth {
            padding-right: 3rem;
        }
        .sub-fourth h5 {
            font-size: 1.2rem;
            margin-top: 0; margin-bottom: 16px;
        }
        
       /* CALCULATIONS */
    </style>
    <div class="root" id="mainDiv">
        <div class="container">
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
                            <p class="amount1" id="credit">&pound25,000.00</p>
                            <span class="hhh"></span>
                        </div>
                        <div style="margin-top:2rem">
                            <p class="amount">Monthly payments</p>
                            <p class="amount2" id="payments">&pound666.24</p>
    
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
                            <p class="amount4" id="payable">&pound39,437.16</p>
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
        </div>  
        
        <!-- TERM LIST -->
          <div class="main-container"> 
            <h3 class="sectionLabel" style="margin-left:3rem">TERMS</h3>
            <div class="control-left">
                <button class="lefty paddle" id="left-button">&lt</button>
            </div>
           <div class="outer" id="content">
           
            </div>
            <div class="control-right">
                <button class="righty paddle" id="right-button">&gt</button>
            </div>
        </div>

        <!-- TERM LIST -->

        <! -- CALCULATIONS -->
        <div class="main my-5">
            <div class="zero">
                <h3>REPRESENTATIVE EXAMPLE</h3>
            </div>
            <div class="full-width">
                <div class="first">
                <div class="sub-first">
                    <h5>Total Amount Payable</h5>
                    <h5>Duration of Agreement</h5>
                    <h5>Fixed Rate of Interest</h5>
                    <h5>Amount of Credit</h5>
                    <h5>Representative</h5>
                </div>
                <div class="sub-second">
                    <h5>&pound35,369.70</h5>
                    <h5 id="agreement">18 months</h5>
                    <h5>6.87 % p.a.</h5>
                    <h5 id="credit2">&pound23,093.00</h5>
                    <h5>13.40 % APR</h5>
                </div>
                </div>
                <div class="second">
                <div class="sub-third">
                    <h5 id="agreement2">18 Monthly Payments</h5>
                    <h5>Cash Price</h5>
                    <h5>Customer deposit</h5>
                    <h5>Interest Charges</h5>
                </div>
                <div class="sub-fourth">
                    <h5 id="payments2">&pound1,415.15</h5>
                    <h5 id="cashprice">&pound32,990.00</h5>
                    <h5 id="demo1">&pound9,897</h5>
                    <h5>&pound2,379.70</h5>
                </div>
                </div>
            </div>
            </div>
        <!-- CALCULATIONS -->
        </div>
    </div>
    
`;

class EMICalcultor extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    setComponentTheme(cf) {
        console.log(cf);
        this.shadowRoot.querySelector('#mainDiv').classList.add(cf.theme);
    }

    static get observedAttributes() {
        return ['config'];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        console.log({name, oldVal, newVal})
        if(name == 'config') {
            let config = JSON.parse(newVal)
            console.log();
            if(config.theme !== undefined) {
                this.setComponentTheme(config);
            }

            if(config.payload!== undefined) {
                // console.log(config.payload[0].range);
                this.setTerms(config.payload[0].range);
            }
        }
    }

    connectedCallback() {

        let deposite_txt = this.shadowRoot.getElementById('demo')
        this.shadowRoot.getElementById('myrange').oninput = function(elm) {
            // console.log(this.value)
            deposite_txt.innerHTML = this.value;
        };
        
        // this.setTerms();
        this.scrollTerms();
        this.calculateAndSetData()

    }

    setTerms(termsData) {

        // let terms = [12,18,24, 30, 36, 42, 48, 54, 60, 62, 64, 68];
        let terms = termsData;

        for (let index = 0; index < terms.length; index++) {
            const element = terms[index];

            let div = document.createElement('div'); div.className = 'child';
            div.setAttribute('data-term', element)

            let valSpan = document.createElement('span');
            valSpan.className = 'val'; valSpan.innerHTML = element
            
            let monthsSpan = document.createElement('div'); 
            monthsSpan.className = 'month'; monthsSpan.innerHTML = 'Month'

            div.append(valSpan, monthsSpan); 
            this.shadowRoot.querySelector('#content').appendChild(div)

        }

    }

    scrollTerms() {

        var content = this.shadowRoot.querySelector('#content'),
        scrollStep = 200;

        this.shadowRoot.querySelector('#right-button').addEventListener('click', function(e) {
            e.preventDefault();
            let sl = content.scrollLeft, cw = content.scrollWidth;

            if ((sl + scrollStep) >= cw) content.scrollTo(cw, 0);
            else content.scrollTo((sl + scrollStep), 0);
        });
    
        this.shadowRoot.querySelector('#left-button').addEventListener('click', function(e) {
            e.preventDefault();
            let sl = content.scrollLeft;
            
            if ((sl - scrollStep) <= 0) content.scrollTo(0, 0);
            else content.scrollTo((sl - scrollStep), 0);
        });

    }

    calculateAndSetData() {

        let els = Array.from(this.shadowRoot.querySelectorAll(".child"));
        let payments = this.shadowRoot.getElementById("payments");
        let payable=this.shadowRoot.getElementById("payable")
        let credit = this.shadowRoot.getElementById("credit");
        let agreement = this.shadowRoot.getElementById("agreement");
        let agreement2 = this.shadowRoot.getElementById("agreement2");
        let credit2 = this.shadowRoot.getElementById("credit2");
        let payments2 = this.shadowRoot.getElementById("payments2");
        let cashprice=this.shadowRoot.getElementById("cashprice")
        let demo=this.shadowRoot.getElementById("demo")
        for (let i = 0, x = els.length; i < x; i++) {
        els[i].onclick = function (event) {
            let month = event.target.closest(".child").dataset.term;
            // console.log(mon);
            // let value =
            // (parseFloat(payable.innerHTML) - parseFloat(demo.innerHTML)) / month;
            // console.log(value)
            // let value2 = cashprice.innerHTML - demo.innerHTML;
            // payments.innerHTML = parseFloat(value).toFixed(2);
            // credit.innerHTML = parseFloat(value2).toFixed(2);
            // agreement.innerHTML = month;
            // agreement2.innerHTML = month;
            // credit2.innerHTML = parseFloat(value2).toFixed(2);
            // payments2.innerHTML = parseFloat(value).toFixed(2);
        };
        }
    }

}

window.customElements.define('emi-calculator', EMICalcultor);
