# My-New-Password-Generator
I am creating a random password generator using JavaScript. I am using pre-existing code for the HTML and CSS, but the rest is on me.

I first started by adding my character variables (lines 4-7). Then I set the password length by the guidelines from lines 20-23. It took me a while to figure out I needed to create an empty string for these characters in line 18, which would make sense later. 

After, I added the user prompts for which characters they wanted, shown in lines 26-29.

I then used if statements to add the user prompts to the passwordOptions var in lines 32-43. I'm sure I could have done this in a more streamlined way, but it worked!

The if statement in line 46-48 ensure that the user selects one character type.

It took me a while and quite the headache to also learn to add another empty var string in line 50 to hold this new password generator.

Next, I used a for loop to generate the random characters based on selected length and passwordOptions.

Finally, I used a return with the newPassword variable, and it works!


