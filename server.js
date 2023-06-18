// sk_test_51NEaMSLqxLnNt45uAr33F7DqiWbJaqDyoD1dK44h6vaKcee3QoQ3aSo9tMDeNGfErfAaawLV4C0FvD7oI2Vxj9F900QaNAOBzn
// coffee= price_1NEb52LqxLnNt45uO7lb4DgC
// sunglss= price_1NEbEjLqxLnNt45uIjWEX7Ho
// camera= price_1NEbJ8LqxLnNt45ujFgjfcbQ

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {

    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });
    
    const session = await Stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(3000, () => console.log("listening on port 3000!"))