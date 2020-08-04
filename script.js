const view = {
    showNumber: function(n) {
        let divResult = document.querySelector('#showResult');
        divResult.innerHTML = n;
    },

    cleanNumber: function() {
        let divResult = document.querySelector('#showResult');
        divResult.innerHTML = '';
    }
};

const model = {
    number: 0,
    calculate: function() {
        this.number = Math.random();
        let result = this.number;

        view.showNumber(result);
    }
};

const controller = {
    handleClick: function() {
        model.calculate();
    }
};

(function() {
    
    let app = {
        init: function() {
            this.main();
            this.event();
        },

        main: function() {
            
        },

        event: function() {
            let btnCalculate = document.querySelector('#btn');
            let btnClean = document.querySelector('#clean');

            btnCalculate.addEventListener('click', () => {
                controller.handleClick();
            });

            btnClean.addEventListener('click', () => {
                view.cleanNumber();
            });

        }
    };
    app.init();
}());