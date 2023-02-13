
        var string = "Brent";
        var STRING = "De Los Angeles"

        var myVar = "global"
        function checkscope()
        {
                var myVar = "local"
                document.write(myVar);
        }

        function changeToGreen()
        {
                document.getElementById("task1").className="green"

        }

        function checkAge()
        {
                var age = document.myForm.age.value;
                if(age > 65)
                {
                        document.write("You are too old");
                }
                else
                {
                        document.write("Ok you can drive");
                }
        }

        function multiply()
        {
                var num1 = document.calculator.num1.value;
                var num2 = document.calculator.num2.value;
                document.getElementById("output").innerHTML = num1 * num2;

        }

        function divide()
        {
                var num1 = document.calculator.num1.value
                var num2 = document.calculator.num2.value
                document.getElementById("output").innerHTML = num1 / num2;
        }

        function Add()
        {
                var num1 = document.calculator.num1.value
                var num2 = document.calculator.num2.value
                var sum = parseFloat(num1) + parseFloat(num2);
                document.getElementById("output").innerHTML = sum;
        }

        function Subtract()
        {
                var num1 = document.calculator.num1.value
                var num2 = document.calculator.num2.value
            
                document.getElementById("output").innerHTML = num1 - num2;
        }