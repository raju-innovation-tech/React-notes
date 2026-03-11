  /*
  
===========  Real dom vs Virtual dom  ============

                         document
                            \
                           html
                            \
                  \````````````````````````\
                 head                     body
                  \                        \
                 title                     ul
                   \                        \
                  text               \```````\`````````\
                                    li       li        li

 virtual dom = virtual dom make a copy of real dom

                         document
                            \
                           html
                            \
                  \````````````````````````\
                 head                     body
                  \                        \
                 title                     ul
                   \                        \
                  text               \```````\`````````\
                                    li       li        li                             
             
appling changing here in virtual dom , 
after compare virtual & real dom whic
changable part. */