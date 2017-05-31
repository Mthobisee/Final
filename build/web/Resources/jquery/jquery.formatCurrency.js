$(document).ready(function() {
    $('#gross').blur(function() {
        $('#gross').formatCurrency();
        if ($('#gross').val() == "R0.00") {
            $('#gross').val("");
        }
    });
    $('#netIncome').blur(function() {
        $('#netIncome').formatCurrency();
        if ($('#netIncome').val() == "R0.00") {
            $('#netIncome').val("");
        }
    });

    $('#financeApplicationCommission').blur(function() {
        $('#financeApplicationCommission').formatCurrency();
        if ($('#financeApplicationCommission').val() == "R0.00") {
            $('#financeApplicationCommission').val("");
        }
    });
    $('#financeApplicationOvertime').blur(function() {
        $('#financeApplicationOvertime').formatCurrency();
        if ($('#financeApplicationOvertime').val() == "R0.00") {
            $('#financeApplicationOvertime').val("");
        }
    });
    $('#basicDetailsNoneWesbankGrossIncome').blur(function() {
        $('#basicDetailsNoneWesbankGrossIncome').formatCurrency();
        if ($('#basicDetailsNoneWesbankGrossIncome').val() == "R0.00") {
            $('#basicDetailsNoneWesbankGrossIncome').val("");
        }
    });
    $('#basicDetailsNoneWesbankNetIncome').blur(function() {
        $('#basicDetailsNoneWesbankNetIncome').formatCurrency();
        if ($('#basicDetailsNoneWesbankNetIncome').val() == "R0.00") {
            $('#basicDetailsNoneWesbankNetIncome').val("");
        }
    });
    $('#amountOfIncome').blur(function() {
        $('#amountOfIncome').formatCurrency();
        if ($('#amountOfIncome').val() == "R0.00") {
            $('#amountOfIncome').val("");
        }
    });
    $('#price').blur(function() {
        $('#price').formatCurrency();
        if ($('#price').val() == "R0.00") {
            $('#price').val("");
        }
    });
    $('#estVal').blur(function() {
        $('#estVal').formatCurrency();
        if ($('#estVal').val() == "R0.00") {
            $('#estVal').val("");
        }
    });
    $('#howMuch').blur(function() {
        $('#howMuch').formatCurrency();
        if ($('#howMuch').val() == "R0.00") {
            $('#howMuch').val("");
        }
    });
    $('#purchasePrice').blur(function() {
        $('#purchasePrice').formatCurrency();
        if ($('#purchasePrice').val() == "R0.00") {
            $('#purchasePrice').val("");
        }
    });

    $('#reviewApplicationPurchasePrice').blur(function() {
        $('#reviewApplicationPurchasePrice').formatCurrency();
        if ($('#reviewApplicationPurchasePrice').val() == "R0.00") {
            $('#reviewApplicationPurchasePrice').val("");
        }
    });

    $('#reviewApplicationMonthlyPayment').blur(function() {
        $('#reviewApplicationMonthlyPayment').formatCurrency();
        if ($('#reviewApplicationMonthlyPayment').val() == "R0.00") {
            $('#reviewApplicationMonthlyPayment').val("");
        }
    });

    $('#creditAdvisorGrossIncome').blur(function() {
        $('#creditAdvisorGrossIncome').formatCurrency();
        if ($('#creditAdvisorGrossIncome').val() == "R0.00") {
            $('#creditAdvisorGrossIncome').val("");
        }
    });

    $('#creditAdvisorNetIncome').blur(function() {
        $('#creditAdvisorNetIncome').formatCurrency();
        if ($('#creditAdvisorNetIncome').val() == "R0.00") {
            $('#creditAdvisorNetIncome').val("");
        }
    });

    // Car Goal Change
    $('#carGoalChangeAmountGoal').blur(function() {
        $('#carGoalChangeAmountGoal').formatCurrency();
        if ($('#carGoalChangeAmountGoal').val() == "R0.00") {
            $('#carGoalChangeAmountGoal').val("");
        }
    });
    $('#carGoalChangeAmountGoal').blur(function() {
        $('#carGoalChangeAmountGoal').formatCurrency();
        if ($('#carGoalChangeAmountGoal').val() == "R0.00") {
            $('#carGoalChangeAmountGoal').val("");
        }
    });
    $('#carGoalChangeReatilValue').blur(function() {
        $('#carGoalChangeReatilValue').formatCurrency();
        if ($('#carGoalChangeReatilValue').val() == "R0.00") {
            $('#carGoalChangeReatilValue').val("");
        }
    });


    // Review Application currency editables start
    /* Application Terms */
    $('#reviewApplicationDeposit').blur(function() {
        $('#reviewApplicationDeposit').formatCurrency();
        if ($('#reviewApplicationDeposit').val() == "R0.00") {
            $('#reviewApplicationDeposit').val("");
        }
    });

    /* Financial Details */
    $('#reviewApplicationGrossIncome').blur(function() {
        $('#reviewApplicationGrossIncome').formatCurrency();
        if ($('#reviewApplicationGrossIncome').val() == "R0.00") {
            $('#reviewApplicationGrossIncome').val("");
        }
    });

    $('#reviewApplicationNetIncome').blur(function() {
        $('#reviewApplicationNetIncome').formatCurrency();
        if ($('#reviewApplicationNetIncome').val() == "R0.00") {
            $('#reviewApplicationNetIncome').val("");
        }
    });

    $('#reviewApplicationMonthlyExpenses').blur(function() {
        $('#reviewApplicationMonthlyExpenses').formatCurrency();
        if ($('#reviewApplicationMonthlyExpenses').val() == "R0.00") {
            $('#reviewApplicationMonthlyExpenses').val("");
        }
    });

    $('#reviewApplicationTotalAmountOtherIncome').blur(function() {
        $('#reviewApplicationTotalAmountOtherIncome').formatCurrency();
        if ($('#reviewApplicationTotalAmountOtherIncome').val() == "R0.00") {
            $('#reviewApplicationTotalAmountOtherIncome').val("");
        }
    });

    $('#reviewApplicationTotalMonthlyCommission').blur(function() {
        $('#reviewApplicationTotalMonthlyCommission').formatCurrency();
        if ($('#reviewApplicationTotalMonthlyCommission').val() == "R0.00") {
            $('#reviewApplicationTotalMonthlyCommission').val("");
        }
    });

    $('#reviewApplicationOvertime').blur(function() {
        $('#reviewApplicationOvertime').formatCurrency();
        if ($('#reviewApplicationOvertime').val() == "R0.00") {
            $('#reviewApplicationOvertime').val("");
        }
    });

    $('#reviewApplicationLivingExpenses').blur(function() {
        $('#reviewApplicationLivingExpenses').formatCurrency();
        if ($('#reviewApplicationLivingExpenses').val() == "R0.00") {
            $('#reviewApplicationLivingExpenses').val("");
        }
    });

    $('#reviewApplicationSalaryDeductions').blur(function() {
        $('#reviewApplicationSalaryDeductions').formatCurrency();
        if ($('#reviewApplicationSalaryDeductions').val() == "R0.00") {
            $('#reviewApplicationSalaryDeductions').val("");
        }
    });

    $('#expenses').blur(function() {
        $('#expenses').formatCurrency();
        if ($('#expenses').val() == "R0.00") {
            $('#expenses').val("");
        }
    });

    $('#bondRent').blur(function() {
        $('#bondRent').formatCurrency();
        if ($('#bondRent').val() == "R0.00") {
            $('#bondRent').val("");
        }
    });

    $('#domesticSecurityServices').blur(function() {
        $('#domesticSecurityServices').formatCurrency();
        if ($('#domesticSecurityServices').val() == "R0.00") {
            $('#domesticSecurityServices').val("");
        }
    });

    $('#donationsTithes').blur(function() {
        $('#donationsTithes').formatCurrency();
        if ($('#donationsTithes').val() == "R0.00") {
            $('#donationsTithes').val("");
        }
    });

    $('#education').blur(function() {
        $('#education').formatCurrency();
        if ($('#education').val() == "R0.00") {
            $('#education').val("");
        }
    });

    $('#entertainment').blur(function() {
        $('#entertainment').formatCurrency();
        if ($('#entertainment').val() == "R0.00") {
            $('#entertainment').val("");
        }
    });

    $('#groceries').blur(function() {
        $('#groceries').formatCurrency();
        if ($('#groceries').val() == "R0.00") {
            $('#groceries').val("");
        }
    });

    // Review Application currency editables start
    /* Application Terms */
    $('#reviewApplicationDeposit').blur(function() {
        $('#reviewApplicationDeposit').formatCurrency();
        if ($('#reviewApplicationDeposit').val() == "R0.00") {
            $('#reviewApplicationDeposit').val("");
        }
    });

    /* Financial Details */
    $('#reviewApplicationGrossIncome').blur(function() {
        $('#reviewApplicationGrossIncome').formatCurrency();
        if ($('#reviewApplicationGrossIncome').val() == "R0.00") {
            $('#reviewApplicationGrossIncome').val("");
        }
    });

    $('#reviewApplicationNetIncome').blur(function() {
        $('#reviewApplicationNetIncome').formatCurrency();
        if ($('#reviewApplicationNetIncome').val() == "R0.00") {
            $('#reviewApplicationNetIncome').val("");
        }
    });

    $('#reviewApplicationMonthlyExpenses').blur(function() {
        $('#reviewApplicationMonthlyExpenses').formatCurrency();
        if ($('#reviewApplicationMonthlyExpenses').val() == "R0.00") {
            $('#reviewApplicationMonthlyExpenses').val("");
        }
    });

    $('#reviewApplicationTotalAmountOtherIncome').blur(function() {
        $('#reviewApplicationTotalAmountOtherIncome').formatCurrency();
        if ($('#reviewApplicationTotalAmountOtherIncome').val() == "R0.00") {
            $('#reviewApplicationTotalAmountOtherIncome').val("");
        }
    });

    $('#reviewApplicationTotalMonthlyCommission').blur(function() {
        $('#reviewApplicationTotalMonthlyCommission').formatCurrency();
        if ($('#reviewApplicationTotalMonthlyCommission').val() == "R0.00") {
            $('#reviewApplicationTotalMonthlyCommission').val("");
        }
    });

    $('#reviewApplicationOvertime').blur(function() {
        $('#reviewApplicationOvertime').formatCurrency();
        if ($('#reviewApplicationOvertime').val() == "R0.00") {
            $('#reviewApplicationOvertime').val("");
        }
    });

    $('#reviewApplicationLivingExpenses').blur(function() {
        $('#reviewApplicationLivingExpenses').formatCurrency();
        if ($('#reviewApplicationLivingExpenses').val() == "R0.00") {
            $('#reviewApplicationLivingExpenses').val("");
        }
    });

    $('#reviewApplicationSalaryDeductions').blur(function() {
        $('#reviewApplicationSalaryDeductions').formatCurrency();
        if ($('#reviewApplicationSalaryDeductions').val() == "R0.00") {
            $('#reviewApplicationSalaryDeductions').val("");
        }
    });

    $('#expenses').blur(function() {
        $('#expenses').formatCurrency();
        if ($('#expenses').val() == "R0.00") {
            $('#expenses').val("");
        }
    });

    $('#bondRent').blur(function() {
        $('#bondRent').formatCurrency();
        if ($('#bondRent').val() == "R0.00") {
            $('#bondRent').val("");
        }
    });

    $('#domesticSecurityServices').blur(function() {
        $('#domesticSecurityServices').formatCurrency();
        if ($('#domesticSecurityServices').val() == "R0.00") {
            $('#domesticSecurityServices').val("");
        }
    });

    $('#donationsTithes').blur(function() {
        $('#donationsTithes').formatCurrency();
        if ($('#donationsTithes').val() == "R0.00") {
            $('#donationsTithes').val("");
        }
    });

    $('#education').blur(function() {
        $('#education').formatCurrency();
        if ($('#education').val() == "R0.00") {
            $('#education').val("");
        }
    });

    $('#entertainment').blur(function() {
        $('#entertainment').formatCurrency();
        if ($('#entertainment').val() == "R0.00") {
            $('#entertainment').val("");
        }
    });

    $('#groceries').blur(function() {
        $('#groceries').formatCurrency();
        if ($('#groceries').val() == "R0.00") {
            $('#groceries').val("");
        }
    });

    $('#householdExpenses').blur(function() {
        $('#householdExpenses').formatCurrency();
        if ($('#householdExpenses').val() == "R0.00") {
            $('#householdExpenses').val("");
        }
    });

    $('#maintenance').blur(function() {
        $('#maintenance').formatCurrency();
        if ($('#maintenance').val() == "R0.00") {
            $('#maintenance').val("");
        }
    });

    $('#transportCosts').blur(function() {
        $('#transportCosts').formatCurrency();
        if ($('#transportCosts').val() == "R0.00") {
            $('#transportCosts').val("");
        }
    });

    $('#otherCosts').blur(function() {
        $('#otherCosts').formatCurrency();
        if ($('#otherCosts').val() == "R0.00") {
            $('#otherCosts').val("");
        }
    });
    // Review Application currency editables end

    // Profile currency editables start
    /* Financial Details */
    $('#reviewApplicationGrossIncome').blur(function() {
        $('#reviewApplicationGrossIncome').formatCurrency();
        if ($('#reviewApplicationGrossIncome').val() == "R0.00") {
            $('#reviewApplicationGrossIncome').val("");
        }
    });

    $('#reviewApplicationMonthlyExpenses').blur(function() {
        $('#reviewApplicationMonthlyExpenses').formatCurrency();
        if ($('#reviewApplicationMonthlyExpenses').val() == "R0.00") {
            $('#reviewApplicationMonthlyExpenses').val("");
        }
    });

    $('#reviewApplicationTotalAmountOtherIncome').blur(function() {
        $('#reviewApplicationTotalAmountOtherIncome').formatCurrency();
        if ($('#reviewApplicationTotalAmountOtherIncome').val() == "R0.00") {
            $('#reviewApplicationTotalAmountOtherIncome').val("");
        }
    });

    $('#reviewApplicationTotalMonthlyCommission').blur(function() {
        $('#reviewApplicationTotalMonthlyCommission').formatCurrency();
        if ($('#reviewApplicationTotalMonthlyCommission').val() == "R0.00") {
            $('#reviewApplicationTotalMonthlyCommission').val("");
        }
    });

    $('#reviewApplicationOvertime').blur(function() {
        $('#reviewApplicationOvertime').formatCurrency();
        if ($('#reviewApplicationOvertime').val() == "R0.00") {
            $('#reviewApplicationOvertime').val("");
        }
    });

    $('#reviewApplicationSalaryDeductions').blur(function() {
        $('#reviewApplicationSalaryDeductions').formatCurrency();
        if ($('#reviewApplicationSalaryDeductions').val() == "R0.00") {
            $('#reviewApplicationSalaryDeductions').val("");
        }
    });
    // Profile currency editables end

    /* Trade in */
    $('#tradeInSettlementAmountOne').blur(function() {
        $('#tradeInSettlementAmountOne').formatCurrency();
        if ($('#tradeInSettlementAmountOne').val() == "R0.00") {
            $('#tradeInSettlementAmountOne').val("");
        }
    });
    $('#tradeInSettlementAmountTwo').blur(function() {
        $('#tradeInSettlementAmountTwo').formatCurrency();
        if ($('#tradeInSettlementAmountTwo').val() == "R0.00") {
            $('#tradeInSettlementAmountTwo').val("");
        }
    });

    $('#updateIncomeDetailsGrossIncome').blur(function() {
        $('#updateIncomeDetailsGrossIncome').formatCurrency();
        if ($('#updateIncomeDetailsGrossIncome').val() == "R0.00") {
            $('#updateIncomeDetailsGrossIncome').val("");
        }
    });

    $('#updateIncomeDetailsNetIncome').blur(function() {
        $('#updateIncomeDetailsNetIncome').formatCurrency();
        if ($('#updateIncomeDetailsNetIncome').val() == "R0.00") {
            $('#updateIncomeDetailsNetIncome').val("");
        }
    });

    $('#updateIncomeDetailsExpenses').blur(function() {
        $('#updateIncomeDetailsExpenses').formatCurrency();
        if ($('#updateIncomeDetailsExpenses').val() == "R0.00") {
            $('#updateIncomeDetailsExpenses').val("");
        }
    });

    $('#householdExpenses').blur(function() {
        $('#householdExpenses').formatCurrency();
        if ($('#householdExpenses').val() == "R0.00") {
            $('#householdExpenses').val("");
        }
    });

    $('#maintenance').blur(function() {
        $('#maintenance').formatCurrency();
        if ($('#maintenance').val() == "R0.00") {
            $('#maintenance').val("");
        }
    });

    $('#transportCosts').blur(function() {
        $('#transportCosts').formatCurrency();
        if ($('#transportCosts').val() == "R0.00") {
            $('#transportCosts').val("");
        }
    });

    $('#otherCosts').blur(function() {
        $('#otherCosts').formatCurrency();
        if ($('#otherCosts').val() == "R0.00") {
            $('#otherCosts').val("");
        }
    });
    // Review Application currency editables end

    // Profile currency editables start
    /* Financial Details */
    $('#reviewApplicationGrossIncome').blur(function() {
        $('#reviewApplicationGrossIncome').formatCurrency();
        if ($('#reviewApplicationGrossIncome').val() == "R0.00") {
            $('#reviewApplicationGrossIncome').val("");
        }
    });

    $('#reviewApplicationMonthlyExpenses').blur(function() {
        $('#reviewApplicationMonthlyExpenses').formatCurrency();
        if ($('#reviewApplicationMonthlyExpenses').val() == "R0.00") {
            $('#reviewApplicationMonthlyExpenses').val("");
        }
    });

    $('#reviewApplicationTotalAmountOtherIncome').blur(function() {
        $('#reviewApplicationTotalAmountOtherIncome').formatCurrency();
        if ($('#reviewApplicationTotalAmountOtherIncome').val() == "R0.00") {
            $('#reviewApplicationTotalAmountOtherIncome').val("");
        }
    });

    $('#reviewApplicationTotalMonthlyCommission').blur(function() {
        $('#reviewApplicationTotalMonthlyCommission').formatCurrency();
        if ($('#reviewApplicationTotalMonthlyCommission').val() == "R0.00") {
            $('#reviewApplicationTotalMonthlyCommission').val("");
        }
    });

    $('#reviewApplicationOvertime').blur(function() {
        $('#reviewApplicationOvertime').formatCurrency();
        if ($('#reviewApplicationOvertime').val() == "R0.00") {
            $('#reviewApplicationOvertime').val("");
        }
    });

    $('#reviewApplicationSalaryDeductions').blur(function() {
        $('#reviewApplicationSalaryDeductions').formatCurrency();
        if ($('#reviewApplicationSalaryDeductions').val() == "R0.00") {
            $('#reviewApplicationSalaryDeductions').val("");
        }
    });
    // Profile currency editables end

    /* Trade in */
    $('#tradeInSettlementAmount').blur(function() {
        $('#tradeInSettlementAmount').formatCurrency();
        if ($('#tradeInSettlementAmount').val() == "R0.00") {
            $('#tradeInSettlementAmount').val("");
        }
    });

});

(function($) {

    $.fn.formatCurrency = function(settings) {
        settings = jQuery.extend({
            name: "formatCurrency",
            useHtml: false,
            symbol: 'R',
            global: true
        }, settings);

        return this.each(function() {
            var num = "0";
            num = $(this)[settings.useHtml ? 'html' : 'val']();
            num = num.replace(/\R|\,/g, '');
            if (isNaN(num))
                num = "0";
            sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10)
                cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));

            $(this)[settings.useHtml ? 'html' : 'val'](((sign) ? '' : '-') + settings.symbol + num + '.' + cents);
        });
    };

    // Remove all non numbers from text
    $.fn.toNumber = function(settings) {
        settings = jQuery.extend({
            name: "toNumber",
            useHtml: false,
            global: true
        }, settings);

        return this.each(function() {
            var method = settings.useHtml ? 'html' : 'val';
            $(this)[method]($(this)[method]().replace(/[^\d\.]/g, ''));
        });
    };


})(jQuery);
