---
title: "VHDL IDE (lowcost)🤑💰"
day: "9"
publishDate: "2020-08-17"
thumbnailImage: "../images/day-9.png"
shareText: "Day 9/100 Steps to Install a VHDL (Low Cost) Development Environment "
hashtags: ["100DaysOfCode",'VHDL','GHDL','GTKWave', 'FPGA', 'IDE']
draft: false
---



## Description:
**Ghdl** is a tool that allows you to compile and simulate the execution of vhdl code. It is a very simple tool, which makes it ideal for tests with the language or to have a previous design before using it in another tool such as simulink. However, a big disadvantage is that it does not allow synthesizing vhdl code.  


## Instalación de un Editor de código:  
>> **Visual Studio Code**  

### Installing the following plugins in Visual Studio Code: 

* VHDL Language Server (VHDL TOOL)  
* VHDL Support for VS code  
* VHDL Snippets, Sintax HighLighting, Pu Zhao.  
* Vscode-icons, Roberto Huertas  

## Installing a VHDL Compiler:  
>>**GHDL**  


## Install a test tool for your designs:
>>**GTKWave**

## Essential commands:

* Parse / compile vhdl -> ghdl -a
* Build executable -> ghdl -e
* Run simulation -> ghdl -r
* View schedules -> gtkwave


## Conclusion:
With these steps you have installed a basic test environment to start messing with the world of hardware description with VHDL, if you want to know more professional environment to work with these technologies I recommend you visit the official website of Altera and Xilinx, these are companies very focused on the development of embedded systems using FPGA and other technologies.
Also visit the Obijuan page to continue learning about the free FPGA environment of a Spanish community.  


You can check <a href="https://github.com/difo23/vhdl" target="_blank"> code </a> @difo23 