function testController(req, res) {
  return res.render(`tpl.${req.query.path}`, { foo: bar });
}
