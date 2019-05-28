::
::
/?  309
::
/-  hall
/+  chat, hall-json
::
|_  str=streams:chat
++  grow
  |%
  ++  json
    =,  enjs:format
    ^-  ^json
    %+  frond  %chat
    %-  pairs
    :~  
      ::
        [%inbox (conf:enjs:hall-json inbox.str)]
      ::
        :-  %configs
        %-  pairs
        %+  turn  ~(tap by configs.str)
          |=  [cir=circle:hall con=(unit config:hall)]
          ^-  [@t ^json]
          :-  (crip (circ:en-tape:hall-json cir))
          ?~(con ~ (conf:enjs:hall-json u.con))
      ::
        :-  %messages
        %-  pairs
        %+  turn  ~(tap by messages.str)
          |=  [cir=circle:hall lis=(list envelope:hall)]
          ^-  [@t ^json]
          :-  (crip (circ:en-tape:hall-json cir))
          [%a (turn lis enve:enjs:hall-json)]
      ::
        :-  %circles  :-  %a
        %+  turn  ~(tap in circles.str)
          |=  nom=name:hall
          [%s nom]
    ==
  --
::
++  grab
  |%
  ++  noun  streams:chat
  --
--