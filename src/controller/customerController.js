const controller = {};

controller.list = (req , res) =>{

    req.getConnection((error,conn)=>{

        conn.query('select * from usuario', (error, datos)=>{
            if (error) {    
                res.json(error);
            } else {
                console.log(datos);
                res.render('usuarios', {
                    data : datos
                });
            }
        });
    });
};

controller.save = (req, res) =>{
 
    req.getConnection((error, conn) =>{
        const data = req.body;
        console.log(data);
        conn.query('insert into usuario set ? ',[data], (error,rows)=>{
            res.redirect('/');
        });
    });
};


controller.consult_actualiza = (req, res) =>{
    req.getConnection((error, conn)=>{
        const {cc} = req.params;
        conn.query('select * from usuario where cc = ?',[cc],(error,rows)=>{
            res.render('editar', {
                data: rows[0]
            });
        });
    });
};

controller.actualizar = (req, res) =>{
    const {cc} = req.params;
    const nue_data = req.body;

    req.getConnection((error, conn) =>{

        conn.query('update usuario set ? where cc = ?',[nue_data, cc],(error, rows)=>{
            res.redirect('/');
        });
    });
};



controller.eliminar = (req, res) =>{
    req.getConnection((error, conn)=>{
        const {cc} = req.params;
        conn.query('delete from usuario where cc = ?',[cc],(error,rows)=>{
            res.redirect('/');
        });
    });
    
   
};

module.exports = controller;