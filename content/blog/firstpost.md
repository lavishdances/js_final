---
title: "Project #1: Js Variables"
description: This was the first week of "labs" so we went over variables.
date: 2023-09-25
tags: "html"
---
# Variables

Today we learned about Variables and went over basic syntax etc.
We leaned about "The Playgound"

```diff-js
 <h1>The Playground</h1>
    <script>
      let quantityPerBox = 12;
      let productName = "wonkabar";

      function describeCandy(productName, numberOfBoxes) {
        var numberCandies = quantityPerBox * numberOfBoxes;

        document.write(
          "You would like " +
            numberCandies +
            " of our " +
            productName +
            " candies!"
        );
      }

      let dino = "Dinosaur";
      let time = 1000;
      let si = true;
      describeCandy("wonkabar", 12);
      document.write(si / dino);
      document.write(time / dino);
      document.write(si / time);
      document.write(time / si);
      document.write(dino / si);
    </script>
    <!--// Use of the Lorem-->
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti
      rem libero, hic itaque suscipit! Iste voluptatibus molestias blanditiis ea
      explicabo nihil suscipit officia doloribus ad maxime sequi laboriosam odit
      unde accusantium, adipisci non ipsam corporis, eos minima, at quod libero
      aliquam debitis? Inventore itaque debitis earum molestiae, iusto
      consequuntur.
    </p>
```
