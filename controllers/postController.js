const { Post } = require("../models");

exports.createPost = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).send("O título é obrigatório");
  }

  await Post.create({ title, description });
  res.send("Post inserido");
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.send(posts);
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).send("ID inválido");
  }

  const post = await Post.findOne({ where: { id } });

  if (!post) {
    return res.status(404).send("Post não encontrado");
  }

  res.send(post);
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (isNaN(id)) {
    return res.status(400).send("ID inválido");
  }

  const post = await Post.findOne({ where: { id } });

  if (!post) {
    return res.status(404).send("Post não encontrado");
  }

  if (!title) {
    return res.status(400).send("O título é obrigatório");
  }

  post.title = title;
  post.description = description;
  await post.save();

  res.send("Post atualizado");
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).send("ID inválido");
  }

  const post = await Post.findOne({ where: { id } });

  if (!post) {
    return res.status(404).send("Post não encontrado");
  }

  await Post.destroy({ where: { id } });
  res.send("DESTRUÍDO");
};
