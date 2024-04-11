from turtle import * 

#we want to paint to house
#step 1: draw a square

width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120) #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

left(30)
color("purple")
forward(70)
left(90)
color("green")
forward(60)
left(90)
forward(40)
left(90)
forward(60)

penup()
goto(200,130)
pendown()
forward(60)
right(90)
forward(40)
right(90)
forward(60)
right(180)
forward(30)
left(90)
forward(40)
right(180)
forward(20)
left(90)
forward(30)
left(180)
forward(60)

penup()
goto(0,170)
pendown()
color("purple")
right(90)
forward(20)
color("green")
left(90)
forward(30)
right(90)
forward(20)
left(180)
forward(40)
right(180)
forward(20)
left(90)
forward(30)




exitonclick()
