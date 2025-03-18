
## API PAYLOAD & RESPONSE

 - [MockAPI](#m)
   - [Get](#m1)
   - [Post](#m2)
 - [Authen](#u)
   - [Auth](#u1)
   - [Insert user](#u2)
 - [Group](#g)
   - [Get all group](#g1)
   - [Get one group](#g2)
   - [Create group](#g3)
   - [Update group name](#g4)
   - [Delete group](#g5)
 - [Items](#i)
   - [Get one item](#i1)
   - [Create item](#i2)
   - [Update item](#i3)
   - [Delete item](#i4)

### <a name="m"></a>Mock API
- #### <a name="m1"></a>Mock (GET)
`http://xxxxxxxxxx/v1/mock`

Response
```js
[
    {
        "id": 1,
        "name": "MockGroupName1",
        "created_at": "2025-03-18 01:00:00"
    },
    {
        "id": 2,
        "name": "MockGroupName2",
        "created_at": "2025-03-18 02:00:00"
    },
    {
        "id": 3,
        "name": "MockGroupName3",
        "created_at": "2025-03-18 03:00:00"
    }
]
```

- #### <a name="m2"></a>Mock (POST)
`http://xxxxxxxxxx/v1/mock`

Payload
```js
{
    anything
}
```

Response
```js
"You send <Your payload> to me."
```

### <a name="u"></a>Authen

- #### <a name="u1"></a>Auth (POST)
`http://xxxxxxxxxx/v1/auth`

Payload
```js
{   
    user: string,
    password: string
}
```

Response
```js
{
    token: string
}
```

- #### <a name="u2"></a>Insert user (POST)
`http://xxxxxxxxxx/v1/user`


Payload
```js
{   
    user: string,
    password: string
}
```

Response
```js
{
    success: boolean
}
```

### <a name="g"></a>Group

- #### <a name="g1"></a>Get all group (GET)
`http://xxxxxxxxxx/v1/groups`

Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```

Response
```js
[
	{
		id: integer,
		name: string,
		created_at: data-time
	},...
]
```

- #### <a name="g2"></a>get one group (GET)
`http://xxxxxxxxxx/v1/group/:id`
	
Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```

Response
```js
{
	groupName:  string,
	items:  [
		{
			id:  integer,
			name:  string,
			quantity:  integer,
			checked:  integer,
			created_at:  date time
		},
		...
	]
}
```

- #### <a name="g3"></a>create group (POST)
`http://xxxxxxxxxx/v1/group`


Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```
Payload
```js
{
    name: string
}
```

Response
```js
{
    success: boolean
}
```

- #### <a name="g4"></a>update group name (PUT)
`http://xxxxxxxxxx/v1/group/:id`

Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```
Payload
```js
{
    name: string,
}
```

Response
```js
{
    success: boolean
}
```

- #### <a name="g5"></a>delete group (DELETE)
`http://xxxxxxxxxx/v1/group/:id`

Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```

Response
```js
{
    success: boolean
}
```

### <a name="i"></a>Items

- #### <a name="i1"></a>Get one item (GET)
`http://xxxxxxxxxx/v1/item/:id`

Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```

Response
```js
{
	id:  integer,
	name:  string,
	quantity:  integer,
	checked:  integer,
	created_at:  date time
}
```

- #### <a name="i2"></a>create item (POST)
`http://xxxxxxxxxx/v1/item`
	
Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```
Payload
```js
{
    name: string,
    quantity: integer,
    group_id: integer
}
```
Response
```js
{
	success: boolean
}
```

- #### <a name="i3"></a>Update item (PUT)
`http://xxxxxxxxxx/v1/item/:id`


Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```
Payload
```js
{
    name: string (optional),
    quantity: integer (optional),
    checked: integer (optional)
}
```
> **NOTE:** at least one parameter in payload 

Response
```js
{
    success: boolean
}
```

- #### <a name="i4"></a>Delete item (DELETE)
`http://xxxxxxxxxx/v1/item/:id`

Header
```js
{
	...,
    Authorization: `Bearer ${token}`
}
```
Response
```js
{
    success: boolean
}
```
