; Team Mechanical Pencils :: Shriya Anand, Michael Borczuk
; SoftDev pd1
; K27 -- Basic functions in JavaScript
; 2022-02-04
; time spent: 0.6 hours

(define fact
  (lambda (num)
    (if (<= num 1)
        1
        (* num (fact (- num 1)))
        )
    )
  )
(display (fact 0))
(display "\n")
(display (fact 10))
(display "\n")
(display (fact 1))
(display "\n")
(display (fact 3))

(define fib
  (lambda (n)
    (if (= n 0)
        0
        (if (<= n 2)
            1
            (+ (fib (- n 2)) (fib (- n 1)))
            )
        )
    )
  )
(display (fib 2))
(display "\n")
(display (fib 1))
(display "\n")
(display (fib 0))
(display "\n")
(display (fib 3))