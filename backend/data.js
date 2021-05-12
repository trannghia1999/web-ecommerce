import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Nghia",
      email: "nghiabe1510@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      
      
    },
   
  ],
  products: [
    
    {
      name: "Basic Shirt Green",
      category: "Shirts",
      image:
        ["https://product.hstatic.net/200000216071/product/_dsc7933_21a846b0527f4c6d8594f2fe695ca953_master.jpg",
     ], price: 400000,
      countInStock: 10,
      brand: "Anthea",
      rating: 4.8,
      numReviews: 17,
      description:
        "https://file.hstatic.net/200000216071/file/t-shirt_d901f761cd2f4e9a9caaeacb28ec411e_master.jpg",
    },
    {
      name: "Basic Shirt Bronze",
      category: "Shirts",
      image:
        ["https://product.hstatic.net/200000216071/product/_dsc8292_e201f3c0a6b249329c54218fd70bf0e1_master.jpg",
        "https://product.hstatic.net/200000216071/product/_dsc8305_9.26.04_pm_537c51a81cb54d5d845f54a969bb42d0_master.jpg",
        "https://product.hstatic.net/200000216071/product/_dsc8309_9.26.04_pm_b016d16ef7624a7182b026096927aa14_master.jpg"
     ], price: 300000,
      countInStock: 10,
      brand: "Anthea",
      rating: 4.8,
      numReviews: 17,
      description:
        "https://file.hstatic.net/200000216071/file/t-shirt_d901f761cd2f4e9a9caaeacb28ec411e_master.jpg",
    },
    {
      name: "Basic Shirt Wood",
      category: "Shirts",
      image:
        ["https://product.hstatic.net/200000216071/product/_dsc8174_fcf30060c1d847d3aaa389efd9675a48_master.jpg",
        "https://product.hstatic.net/200000216071/product/_dsc8184_dd0141e6f4b2441783c4771bc9205ceb_master.jpg"
     ], price: 550000,
      countInStock: 10,
      brand: "Anthea",
      rating: 4.8,
      numReviews: 17,
      description:
        "https://file.hstatic.net/200000216071/file/t-shirt_d901f761cd2f4e9a9caaeacb28ec411e_master.jpg",
    },
    {
      name: "Basic Shirt Pink",
      category: "Shirts",
      image:
       
      ["https://product.hstatic.net/200000216071/product/_dsc7363_171ab05410b842408890993cd96b90af_master.jpg",
    "https://product.hstatic.net/200000216071/product/_dsc7369_d68dc89193384524b39e30d063a19bef_master.jpg",
    ],
        price: 400000,
      countInStock: 0,
      brand: "Anthea",
      rating: 1,
      numReviews: 9,
      description: "high quality product",
    },
    {
      name: "Basic Hoodie",
      category: "Hoodie",
      image:
       
      ["https://product.hstatic.net/200000216071/product/_dsc7328_b88651be39a640da8c6ebad1efb65be9_master.jpg",
   "https://product.hstatic.net/200000216071/product/_dsc7330_83515e44a6f046e6a39fdc3fb84e6ee1_master.jpg",
   "https://product.hstatic.net/200000216071/product/_dsc7354_0d4169252d0d44429f634fafced03e4b_master.jpg",
    ],
        price: 600000,
      countInStock: 10,
      brand: "Anthea",
      rating: 2,
      numReviews: 11,
      description:
        "https://file.hstatic.net/200000216071/file/hoodie_k_zip_22fec3e1c0e34b8fa80f5cacc1b13ea3_grande.jpg",
    },
    {
      name: "GW FULLZIP HOODIE / SANGRIA",
      category: "Hoodie",
      image:
       
      ["https://product.hstatic.net/200000216071/product/_dsc8247_a3ceef9d153d45ef8eea7c6cd88ee205_master.jpg",
   "https://product.hstatic.net/200000216071/product/_dsc8229_902ea460d15f48b7a4e7e529bb78f700_master.jpg",
   
    ],
        price: 600000,
      countInStock: 10,
      brand: "Anthea",
      rating: 2,
      numReviews: 11,
      description:
        "https://file.hstatic.net/200000216071/file/hoodie_k_zip_22fec3e1c0e34b8fa80f5cacc1b13ea3_grande.jpg",
    },
    {
      name: "Basic Sweater",
      category: "Sweater",
      image: [
        "https://product.hstatic.net/200000216071/product/_dsc7869_2d0c746209a14dd0af30695fbaf98f00_master.jpg",
        "https://product.hstatic.net/200000216071/product/_dsc7876_520a6309bfdc4675aed2fe206fb4a8f1_master.jpg",
        "https://product.hstatic.net/200000216071/product/_dsc7882_1_febb7555fbe142d49df84f2f7a22bfb8_master.jpg",
      ],
      price: 500000,
      countInStock: 10,
      brand: "Anthea",
      rating: 2,
      numReviews: 5,
      description:
        "https://file.hstatic.net/200000216071/file/sweater_683cdefa0fa5409590cecac3a63762ec_master.jpg",
    },
    {
      name: "Basic Sweater / White Cement",
      category: "Sweater",
      image: [
        "https://product.hstatic.net/200000216071/product/ec3783eb-d37a-48d0-ae91-2f488870ce7d_0e4d06bb34354360ae3150530d3dde89_master.jpeg",
        "https://product.hstatic.net/200000216071/product/deba013e-010f-4885-9c6b-456b8adfbfa2_8d89e6dad2ba4bc29d36788ccaaedd17_master.jpeg",
        "https://product.hstatic.net/200000216071/product/c8756753-bbd6-4d83-a2fd-022fe4e688f9_1063f803faa54248954482c68d22de25_master.jpeg",
      ],
      price: 500000,
      countInStock: 10,
      brand: "Anthea",
      rating: 2,
      numReviews: 5,
      description:
        "https://file.hstatic.net/200000216071/file/sweater_683cdefa0fa5409590cecac3a63762ec_master.jpg",
    },
    {
      name: "Basic Sweater",
      category: "Sweater",
      image: [
        "https://product.hstatic.net/200000216071/product/_dsc8103_42a6f16b05d64673af6ba2a87149775b_master.jpg",
        "https://product.hstatic.net/200000216071/product/_dsc8122_ba7bb935c324463aa181f86021c3cd48_master.jpg",
      
      ],
      price: 500000,
      countInStock: 10,
      brand: "Anthea",
      rating: 2,
      numReviews: 5,
      description:
        "https://file.hstatic.net/200000216071/file/sweater_683cdefa0fa5409590cecac3a63762ec_master.jpg",
    },
    {
      name: "Basic Pant",
      category: "Pants",
      image:
        ["https://product.hstatic.net/200000216071/product/d45dc59c-9de7-45b4-9179-c2f71935354f_7064b8d5032245e595b0adf31324bf29_master.jpeg",
     ], price: 400000,
      countInStock: 10,
      brand: "Anthea",
      rating: 4,
      numReviews: 7,
      description:
        "https://file.hstatic.net/200000216071/file/sweatpants_4c70f70fba0548d0a0373250b7f08d7b.jpg",
    },
    {
      name: "Basic Pant",
      category: "Pants",
      image:
        ["https://product.hstatic.net/200000216071/product/8fb3c521-a84b-4d89-b4da-d99d8c557782_cfeed5e609a44634aaaacc3cb2910843_master.jpeg",
        "https://product.hstatic.net/200000216071/product/ce95d4a9-88b8-435b-b9c5-6bd82c365bfb_a04cc5a2bd314f8885b81c66109ad175_master.jpeg",
     ], price: 400000,
      countInStock: 10,
      brand: "Anthea",
      rating: 4,
      numReviews: 7,
      description:
        "https://file.hstatic.net/200000216071/file/sweatpants_4c70f70fba0548d0a0373250b7f08d7b.jpg",
    },
    {
      name: "Basic Jacket",
      category: "Jacket",
      image:
        ["https://product.hstatic.net/200000216071/product/dbcc0a66-4c9d-4c92-ae0b-beff839d9fbb_d2188548452848d3a4e383023759c214_master.jpeg",
    ],price: 700000,
      countInStock: 10,
      brand: "Anthea",
      rating: 0,
      numReviews: 1,
      description:
        "FreeSize",
    },
    {
      name: "BNC REVERSIBLE BOMBER JACKET",
      category: "Jacket",
      image:
        ["https://product.hstatic.net/200000216071/product/_dsc0632_1ba09e370d8a4e858194ceb56fb4a762_master.jpg",
        "https://product.hstatic.net/200000216071/product/_dsc0682_16632bfcb5524e01864545239867aef1_master.jpg",
    ],price: 700000,
      countInStock: 10,
      brand: "Anthea",
      rating: 0,
      numReviews: 1,
      description:
        "FreeSize",
    },
    {
      name: "Basic Chain",
      category: "Accessories",
      image:
        ["https://product.hstatic.net/200000216071/product/4170a7df-e297-45ff-b326-b00bb2a14888_88163c5345394f729921ccbf4d2198a1_master.jpeg",
    ],price: 100000,
      countInStock: 5,
      brand: "Anthea",
      rating: 2,
      numReviews: 1,
      description: "FreeSize",
    },
    {
      name: "Nike Air Force 1 Low White '07",
      category: "Shoes",
      image:
        ["https://www.glab.vn/storage/products/2021/01/16/6002eaca8ea19.jpg",
        "https://www.glab.vn/storage/products/2021/01/18/6005959eea19d.jpg",
        "https://www.glab.vn/storage/products/2021/01/18/600595a2b6820.jpg"
     ], price: 3000000,
      countInStock: 10,
      brand: "Nike",
      rating: 4.8,
      numReviews: 7,
      description:
        "FreeSize",
    },
    {
      name: " Air Jordan 1 Retro High Dark Mocha",
      category: "Shoes",
      image:
        ["https://www.glab.vn/storage/products/2020/12/24/5fe4428d2e90d.jpg",
        "https://www.glab.vn/storage/products/2020/12/24/5fe4429b3dd83.jpg",
        "https://www.glab.vn/storage/products/2020/12/24/5fe4428f8c8ee.jpg"
     ], price: 12000000,
      countInStock: 10,
      brand: "Nike",
      rating: 4.8,
      numReviews: 7,
      description:
        "FreeSize",
    },
    {
      name: " Air Jordan 1 Retro High OG OBSIDIAN",
      category: "Shoes",
      image:
        ["https://www.glab.vn/storage/products/2020/10/10/5f815dc5c58b6.jpg",
        "https://www.glab.vn/storage/products/2020/10/10/5f815dc6108b7.jpg",
        "https://www.glab.vn/storage/products/2020/10/10/5f815dc62f656.jpg"
     ], price: 14000000,
      countInStock: 10,
      brand: "Nike",
      rating: 4.8,
      numReviews: 7,
      description:
        "FreeSize",
    },
    {
      name: " NIKE LD WAFFLE SACAI BLACK",
      category: "Shoes",
      image:
        ["https://www.glab.vn/storage/products/2020/01/13/5e1c1eb35842a.jpg",
        
     ], price: 14000000,
      countInStock: 10,
      brand: "Nike",
      rating: 4.8,
      numReviews: 7,
      description:
        "FreeSize",
    },
    {
      name: " ADIDAS YEEZY BOOST 350 V2 ISRAFIL",
      category: "Shoes",
      image:
        ["https://www.glab.vn/storage/products/2020/09/04/5f5210502312a.jpg",
        
     ], price: 10000000,
      countInStock: 10,
      brand: "Nike",
      rating: 4.8,
      numReviews: 7,
      description:
        "FreeSize",
    },
  ],
};
export default data;
