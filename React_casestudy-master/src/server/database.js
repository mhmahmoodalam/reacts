var mongoose=require('mongoose');
var Userlist=require('./models/userlist.js');
var ProductSchema=require('./models/productSchema.js')
var ProductDetails=require('./models/productDetailSchema');
var PurchasedSchema=require('./models/purchasedDetailSchema');
var ChatDataSchema =require('./models/chatData');

mongoose.connect("mongodb://localhost/Users",function(){
  console.log("db connected");
  //mongoose.connection.once('connected',()=>{
    mongoose.connection.db.dropDatabase();
  //});

  var users=[{
    username:"krishna",
    password:"krishna@123",
    role:"admin",
    availabilityStatus:"Available"
  },{
    username:"roopa",
    password:"roopa@123",
    role:"customer",
    availabilityStatus:"Available"
  },{
    username:"rimika",
    password:"rimika@123",
    role:"customer",
    availabilityStatus:"Offline"
  },{
    username:"arun",
    password:"arun@123",
    role:"customer",
    availabilityStatus:"Available"
  },{
    username:"roshan",
    password:"roshan@123",
    role:"customer",
    availabilityStatus:"Available"
  },{
    username:"khalid",
    password:"khalid@123",
    role:"customer",
    availabilityStatus:"Available"
  }];

  users.forEach(function(user){
      new Userlist(user).save();
  });


  var purchasedUserDetails=[
    {pdtCode:"lt-023",purchasedUser:"roopa"},
    {pdtCode:"im-022",purchasedUser:"roopa"},
    {pdtCode:"ks-029",purchasedUser:"roopa"},
    {pdtCode:"im-022",purchasedUser:"rimika"},
    {pdtCode:"pb-099",purchasedUser:"rimika"},
    {pdtCode:"lt-023",purchasedUser:"arun"},
    {pdtCode:"lt-023",purchasedUser:"khalid"},
    {pdtCode:"ks-029",purchasedUser:"khalid"},
    {pdtCode:"ks-029",purchasedUser:"roshan"},
    {pdtCode:"pb-099",purchasedUser:"khalid"},
  ];
  purchasedUserDetails.forEach(function(pdt){
    new PurchasedSchema(pdt).save();
  });

  var products=[{
    pdtName:"Ind Mobile EX321",
    pdtPrice:8999,
    pdtCode:"im-022",
    pdtDescription:"This will take you to next level of communication.",
    pdtCategory:"Electronics",
    avgFeedback:0,
    pdtImg:"/Images/Mobile.jpg",
    isDiscontinued:false
  },{
    pdtName:"Gamia Laptop",
    pdtPrice:33000,
    pdtCode:"lt-023",
    pdtDescription:"An excellent choice for an awesome gaming experience.",
    pdtCategory:"Electronics",
    avgFeedback:0,
    pdtImg:"/Images/Laptop.jpg",
    isDiscontinued:false
  },{
    pdtName:"Khaadi Shirt",
    pdtPrice:982,
    pdtCode:"ks-029",
    pdtDescription:"Best suitable for tropical climate.",
    pdtCategory:"Costumes",
    avgFeedback:0,
    pdtImg:"/Images/Shirt.jpg",
    isDiscontinued:false
  },{
    pdtName:"NI Power Bank",
    pdtPrice:599,
    pdtCode:"pb-099",
    pdtDescription:"Execellent power bank having usb connector.",
    pdtCategory:"Electronics",
    avgFeedback:0,
    pdtImg:"/Images/PowerBank.jpg",
    isDiscontinued:false
  }];

  products.forEach(function(pdt){
    new ProductSchema(pdt).save();
  });

  var productDetails=[{
    pdtCode:"lt-023",
    feedbackDetails:[{
      user:"roopa",
      body:"Awesome product at an affordable range. Go for it.",
      rating:4
    },{
      user:"rimika",
      body:"Not upto the mark. Gets heated soon",
      rating:3
    },{
      user:"khalid",
      body:"Worst product. First of all , received very late. Forget about it",
      rating:2
    }]
  },{
    pdtCode:"im-022",
    feedbackDetails:[{
      user:"roopa",
      body:"Looks fine",
      rating:4
    },{
      user:"rimika",
      body:"good one at this range of price.",
      rating:4
    },{
      user:"khalid",
      body:"GPS less accurate. Rest everything is fine.",
      rating:2
    }]
  },{
    pdtCode:"ks-029",
    feedbackDetails:[{
      user:"roopa",
      body:"Good for the climate.",
      rating:4
    }]
  },{
    pdtCode:"pb-099",
    feedbackDetails:[{
      user:"khalid",
      body:"Very bad product. Discharge rate is very high and getting heated quickly.",
      rating:2
    },{
      user:"arun",
      body:"Average",
      rating:3
    }]
  }];

  productDetails.forEach(function(pdt){
    new ProductDetails(pdt).save();
  });

  var chatData=[
    {
      id: 'm_1',
      threadID: 't_1',
      threadName: 'Khalid',
      authorName: 'Krishna',
      text: 'Hey Khalid, you want a replacement for the product you recently purchased?',
      timestamp: Date.now() - 99999
    },
    {
      id: 'm_2',
      threadID: 't_1',
      threadName: 'Khalid',
      authorName: 'Khalid',
      text: 'Hi. Definitely. Its malfunctioning.',
      timestamp: Date.now() - 89999
    },
    {
      id: 'm_3',
      threadID: 't_1',
      threadName: 'Khalid',
      authorName: 'Krishna',
      text: 'Please send a mail to CSA@abc.com pointing the issues.',
      timestamp: Date.now() - 79999
    },
    {
      id: 'm_4',
      threadID: 't_2',
      threadName: 'Roopa',
      authorName: 'Krishna',
      text: 'Hi Roopa, this is from customer care regarding the product you recently purchased',
      timestamp: Date.now() - 69999
    },
    {
      id: 'm_5',
      threadID: 't_2',
      threadName: 'Roopa',
      authorName: 'Roopa',
      text: 'Hi. ',
      timestamp: Date.now() - 59999
    },
    {
      id: 'm_6',
      threadID: 't_3',
      threadName: 'Rimika',
      authorName: 'Krishna',
      text: 'Hey Rimika, are you satisfied with the product you recently purchased?',
      timestamp: Date.now() - 49999
    },
    {
      id: 'm_7',
      threadID: 't_3',
      threadName: 'Rimika',
      authorName: 'Rimika',
      text: 'Hi. Yeah, of course.  Thank you',
      timestamp: Date.now() - 39999
    }
  ];

  chatData.forEach(function(chat){
    new ChatDataSchema(chat).save();
  })

  console.log("data stored successfully");
});
