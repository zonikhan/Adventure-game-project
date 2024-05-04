#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
do {
    console.log(chalk.bold.italic.underline.overline.cyanBright("****** Welcome To Adventure Game ******"));
    class Player {
        name;
        fuel = 100;
        constructor(name) {
            this.name = name;
        }
        fuelDecrease() {
            let fuel = this.fuel - 25;
            this.fuel = fuel;
        }
        fuelIncrease() {
            this.fuel = 100;
        }
    }
    class Opponent {
        name;
        fuel = 100;
        constructor(name) {
            this.name = name;
        }
        fuelDecrease() {
            let fuel = this.fuel - 25;
            this.fuel = fuel;
        }
    }
    let player = await inquirer.prompt({ message: "Please Enter Your Name:",
        name: "name",
        type: "input"
    });
    let opponent = await inquirer.prompt({
        type: "list",
        message: "Please Select Your Opponent.",
        name: "select",
        choices: [
            "Skeleton",
            "Assassin",
            "Zombie",
        ]
    });
    let p1 = new Player(player.name);
    let o1 = new Opponent(opponent.select);
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    }
    let Ask = await inquirer.prompt({ message: "Please Select Your Opponent:",
        type: "list",
        name: "option",
        choices: [
            "Attack",
            "Drink Portion",
            "Run for Your Life",
        ]
    });
    if (Ask.option == "Attack") {
        let point = Math.random() * 2;
        if (point > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`));
            console.log(chalk.bold.greenBright(`${o1.name} fuel = ${o1.fuel}`));
        }
        if (point <= 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`));
            console.log(chalk.bold.greenBright(`${p1.name} fuel = ${p1.fuel}`));
        }
    }
    if (Ask.option == "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
    }
    if (Ask.option == "Run for Your Life") {
        console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!!!!"));
    }
} while (true);
