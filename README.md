1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:  getElementById: get element by id name. get only one element in one call.getElementsByClassName: get elements by class name. get many elements just one call.querySelector: get first element node list of the div or  section.querySelectorAll: get All elements node list of the div or section.

2.How do you create and insert a new element into the DOM?
 ans:  document.createElement(" ")--Create Element.for insert we used append(" ") or appendChild(" ").example: const container= document.getElementbyid(" "),const create= document.createElement(" "),container.append("create");


3.What is Event Bubbling and how does it work?
 ans: Event bubbling means if i click child and its triggerd step by step in parent. like if i click a button which is in div,at first its run when i click then bubble ups in div,body,head.

4.What is Event Delegation in JavaScript? Why is it useful?
 ans:  Event Delegation handling events on multiple child elements by adding a single event listener to their parent. it's saves memory and make code simple and clean.

5.What is the difference between preventDefault() and stopPropagation() methods?
 ans: preventDefault() handle default browser action. And  stopPropagation() stop the event from bubbling up the DOM.

       
