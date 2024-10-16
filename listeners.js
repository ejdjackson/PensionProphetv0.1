


// Get all input fields
var inputFields = document.querySelectorAll('#pensionFormLeft input, #pensionFormRight input');
var firstCalc = true;

// Add event listeners to hide results on input change
inputFields.forEach(function(input) {
        input.addEventListener('input', checkFirstCalc);
    }
);

//For the step  up increase functionality
document.addEventListener('DOMContentLoaded', function() {

    // ISA Inputs
    const ISACheckbox = document.getElementById('ISACheckbox');
    const inputCurrentISADiv = document.getElementById('currentISAInput');
    const inputMonthlyISAContributionDiv = document.getElementById('monthlyISAContributionInput');

    // Function to show ISA inputs
    function showISAInputs() {
        inputCurrentISADiv.classList.remove('hidden');
        inputCurrentISADiv.classList.add('visible');
        inputMonthlyISAContributionDiv.classList.remove('hidden');
        inputMonthlyISAContributionDiv.classList.add('visible');
        document.getElementById('currentISA').value = 10000;
            checkFirstCalc();
    }

    // Function to hide ISA inputs and reset their values
    function hideISAInputs() {
        inputCurrentISADiv.classList.remove('visible');
        inputCurrentISADiv.classList.add('hidden');
        inputMonthlyISAContributionDiv.classList.remove('visible');
        inputMonthlyISAContributionDiv.classList.add('hidden');
        // Reset input values to zero
            document.getElementById('currentISA').value = 0;
            document.getElementById('monthlyISAContribution').value = 0;
            checkFirstCalc();
    }

    // Add an event listener to the checkbox
    ISACheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Show both additional inputs when checked
            showISAInputs();
        } else {
            // Hide both additional inputs and reset their values when unchecked
            hideISAInputs();
        }
    });

    // Optional: Initialize the visibility and values based on the checkbox state on page load
    if (ISACheckbox.checked) {
        showISAInputs();
    } else {
        hideISAInputs();
    }




    // Contribution increase inputs
    const contributionIncreaseCheckbox = document.getElementById('contributionIncreaseCheckbox');
    const inputStepUpAgeDiv = document.getElementById('inputStepUpAge');
    const inputStepUpContributionDiv = document.getElementById('inputStepUpContribution');
    

    // Contribution Step-Up Inputs
    const currentAge = document.getElementById('currentAge');
    const stepUpAgeInput = document.getElementById('stepUpAge');
    const stepUpContributionInput = document.getElementById('stepUpContribution');

       // Function to show StepUp inputs
    function showStepUpInputs() {
        var currentAge = document.getElementById('currentAge').value;
    
        inputStepUpAgeDiv.classList.remove('hidden');
        inputStepUpAgeDiv.classList.add('visible');
        inputStepUpContributionDiv.classList.remove('hidden');
        inputStepUpContributionDiv.classList.add('visible');
        document.getElementById('stepUpAge').value = currentAge;
    }

    // Function to hide inputs and reset their values
    function hideStepUpInputs() {
        inputStepUpAgeDiv.classList.remove('visible');
        inputStepUpAgeDiv.classList.add('hidden');
        inputStepUpContributionDiv.classList.remove('visible');
        inputStepUpContributionDiv.classList.add('hidden');
        // Reset input values to zero
        if (stepUpAgeInput) {
            stepUpAgeInput.value = 0;
        }
        if (stepUpContributionInput) {
            stepUpContributionInput.value = 0;
        }
    }

    // Add an event listener to the checkbox
    contributionIncreaseCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Show both additional inputs when checked
            showStepUpInputs();
        } else {
            // Hide both additional inputs and reset their values when unchecked
            hideStepUpInputs();
        }
    });

    // Optional: Initialize the visibility and values based on the checkbox state on page load
    if (contributionIncreaseCheckbox.checked) {
        showStepUpInputs();
    } else {
        hideStepUpInputs();
    }



    //For lower growth post retirement
    // Contribution LowerGrowth Inputs
    const lowerGrowthInput = document.getElementById('fundGrowthPost'); // Replace with your actual input ID
    const fundGrowthPre = document.getElementById('fundGrowthPre'); // Replace with your actual input ID

    // Replace 'lowerGrowthCheckbox' with the actual ID of your LowerGrowth checkbox
    const lowerGrowthCheckbox = document.getElementById('lowerGrowthCheckbox'); 
    const inputLowerGrowthDiv = document.getElementById('inputLowerGrowthDiv'); // The div containing the LowerGrowth input

    if (!lowerGrowthCheckbox) {
        console.error('Checkbox with ID "fundGrowthPost" not found.');
        return;
    }

    // Function to show LowerGrowth input
    function showLowerGrowthInput() {
        inputLowerGrowthDiv.classList.remove('hidden');
        inputLowerGrowthDiv.classList.add('visible');
    }

    // Function to hide input and reset its value
    function hideLowerGrowthInput(fundGrowthPre) {
            inputLowerGrowthDiv.classList.remove('visible');
            inputLowerGrowthDiv.classList.add('hidden');
            lowerGrowthInput.value = document.getElementById('fundGrowthPre').value; 
            checkFirstCalc();
    }

    // Add an event listener to the checkbox
    lowerGrowthCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Show the LowerGrowth input when checked
            showLowerGrowthInput();
        } else {
            // Hide the LowerGrowth input and reset its value when unchecked
            hideLowerGrowthInput();
        }
    });

    // Optional: Initialize the visibility and values based on the checkbox state on page load
    document.addEventListener('DOMContentLoaded', function() {
        if (lowerGrowthCheckbox.checked) {
            showLowerGrowthInput();
        } else {
            hideLowerGrowthInput();
        }
    });


    // For minimum ISA Balance
    const minISABalanceCheckbox = document.getElementById('minISABalanceCheckbox'); 
    const inputMinISABalanceDiv = document.getElementById('inputMinISABalance'); // The div containing the Minimum ISA Balance inputs

    if (!minISABalanceCheckbox) {
        console.error('Checkbox with ID "minISABalanceCheckbox" not found.');
        return;
    }

    // Function to show Minimum ISA Balance inputs
    function showMinISABalanceInputs() {
        if (inputMinISABalanceDiv) {
            inputMinISABalanceDiv.classList.remove('hidden');
            inputMinISABalanceDiv.classList.add('visible');
        } else {
            console.error('Div with ID "minISABalance" not found.');
        }
    }

    // Function to hide inputs and reset their values
    function hideMinISABalanceInputs() {
        if (inputMinISABalanceDiv) {
            inputMinISABalanceDiv.classList.remove('visible');
            inputMinISABalanceDiv.classList.add('hidden');
            document.getElementById('minISABalance').value = 0; 
            checkFirstCalc();
        } 
              
        
    }

    // Add an event listener to the checkbox
    minISABalanceCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Show the Minimum ISA Balance inputs when checked
            showMinISABalanceInputs();
        } else {
            // Hide the Minimum ISA Balance inputs and reset their values when unchecked
            hideMinISABalanceInputs();
        }
    });

    // Optional: Initialize the visibility and values based on the checkbox state on page load
    document.addEventListener('DOMContentLoaded', function() {
        if (minISABalanceCheckbox.checked) {
            showMinISABalanceInputs();
        } else {
            hideMinISABalanceInputs();
        }
    });



    //For DB Pension Innputs
    const dbPensionAmountInput = document.getElementById('dbPensionAmount');
    const dbPensionAgeInput = document.getElementById('dbPensionAge');
    
    // Replace 'DBPensionCheckbox' with the actual ID of your DB Pension checkbox
    const dbPensionCheckbox = document.getElementById('DBPensionCheckbox');
    const inputDBPensionDiv = document.getElementById('inputDBPensionAmount'); // The div containing the DB Pension inputs
    const inputDBPAgeDiv = document.getElementById('inputDBPensionAge'); // The div containing the DB Pension inputs

    if (!dbPensionCheckbox) {
        console.error('Checkbox with ID "DBPensionCheckbox" not found.');
        // Depending on your setup, you might want to stop execution here
        // return;
    }

    // Function to show DB Pension inputs
    function showDBPensionInputs() {
        if (inputDBPensionDiv) {
            inputDBPensionDiv.classList.remove('hidden');
            inputDBPensionDiv.classList.add('visible');
            inputDBPAgeDiv.classList.remove('hidden');
            inputDBPAgeDiv.classList.add('visible');
            document.getElementById('dbPensionAmount').value = 10000;
            document.getElementById('dbPensionAge').value = 60;
            checkFirstCalc();
        } else {
            console.error('Div with ID "inputDBPensionDiv" not found.');
        }
    }

    // Function to hide inputs and reset their values
    function hideDBPensionInputs() {
        if (inputDBPensionDiv) {
            inputDBPensionDiv.classList.remove('visible');
            inputDBPensionDiv.classList.add('hidden');
            inputDBPAgeDiv.classList.remove('visible');
            inputDBPAgeDiv.classList.add('hidden');
            document.getElementById('dbPensionAmount').value = 0;
            document.getElementById('dbPensionAge').value = 60;
            checkFirstCalc();
        } else {
            console.error('Div with ID "inputDBPensionDiv" not found.');
        }
        
       
        
    }

    // Add an event listener to the checkbox
    if (dbPensionCheckbox) {
        dbPensionCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Show the DB Pension inputs when checked
                showDBPensionInputs();
            } else {
                // Hide the DB Pension inputs and reset their values when unchecked
                hideDBPensionInputs();
            }
        });
    }

    // Optional: Initialize the visibility and values based on the checkbox state on page load
    document.addEventListener('DOMContentLoaded', function() {
        if (dbPensionCheckbox) {
            if (dbPensionCheckbox.checked) {
                showDBPensionInputs();
            } else {
                hideDBPensionInputs();
            }
        }
    });


});






// For handling the info popups:

document.addEventListener('DOMContentLoaded', function () {
    // Select all info icons
    const infoIcons = document.querySelectorAll('.info-icon');

    infoIcons.forEach(icon => {
        // Toggle popup on click/tap
        icon.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent event from bubbling up
            togglePopup(this);
        });

        // Toggle popup on keyboard interaction (Enter or Space)
        icon.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePopup(this);
            }
        });
    });

    // Close popups when clicking outside
    document.addEventListener('click', function () {
        closeAllPopups();
    });

    // Close popup when pressing Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeAllPopups();
        }
    });

    // Function to toggle a specific popup
    function togglePopup(icon) {
        const popup = icon.nextElementSibling;
        const isActive = icon.classList.contains('active');

        closeAllPopups(); // Close any open popups first

        if (!isActive) {
            icon.classList.add('active');
            popup.setAttribute('aria-hidden', 'false');
        }
    }

    // Function to close all popups
    function closeAllPopups() {
        infoIcons.forEach(icon => {
            icon.classList.remove('active');
            const popup = icon.nextElementSibling;
            if (popup) {
                popup.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Close popup when clicking the close button
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent event from bubbling up
            const popup = this.parentElement;
            const icon = popup.previousElementSibling;
            icon.classList.remove('active');
            popup.setAttribute('aria-hidden', 'true');
        });
    });
});