exports.homepage = async (req, res) => {
    const locals = {
        'title': "NodeJS",
        'description': "Node js user management system "
    }
    res.render('index', locals);
};

exports.addCustomer = async (req, res) => {
    const locals = {
        'title': "Add new customer - NodeJS",
        'description': "Node js user management system "
    }
    res.render('customer/add', locals);
};

exports.postCustomer = async (req, res) => {
    console.log(req.body);
    const locals = {
        'title': "Add new customer - NodeJS",
        'description': "Node js user management system "
    }
    res.render('customer/add', locals);
};

