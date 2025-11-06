/*
  # E-commerce Database Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `name_en` (text)
      - `name_zh` (text)
      - `name_id` (text)
      - `created_at` (timestamp)
    
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `slug` (text, unique)
      - `name_en` (text)
      - `name_zh` (text)
      - `name_id` (text)
      - `description_en` (text)
      - `description_zh` (text)
      - `description_id` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `featured` (boolean)
      - `in_stock` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (no authentication required for e-commerce browsing)
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name_en text NOT NULL,
  name_zh text NOT NULL,
  name_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  slug text UNIQUE NOT NULL,
  name_en text NOT NULL,
  name_zh text NOT NULL,
  name_id text NOT NULL,
  description_en text DEFAULT '',
  description_zh text DEFAULT '',
  description_id text DEFAULT '',
  price numeric NOT NULL DEFAULT 0,
  image_url text NOT NULL,
  featured boolean DEFAULT false,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Public can view products"
  ON products FOR SELECT
  USING (true);

INSERT INTO categories (slug, name_en, name_zh, name_id) VALUES
  ('fashion', 'Fashion', '时尚', 'Mode'),
  ('electronics', 'Electronics', '电子产品', 'Elektronik'),
  ('home', 'Home & Living', '家居生活', 'Rumah & Hidup'),
  ('beauty', 'Beauty', '美容', 'Kecantikan')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (category_id, slug, name_en, name_zh, name_id, description_en, description_zh, description_id, price, image_url, featured, in_stock) VALUES
  ((SELECT id FROM categories WHERE slug = 'fashion'), 'minimalist-tote', 'Minimalist Leather Tote', '简约皮革手提包', 'Tas Kulit Minimalis', 'Elegant leather tote bag perfect for everyday use', '优雅的皮革手提包，非常适合日常使用', 'Tas kulit elegan sempurna untuk penggunaan sehari-hari', 89.99, 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg', true, true),
  ((SELECT id FROM categories WHERE slug = 'fashion'), 'classic-sneakers', 'Classic White Sneakers', '经典白色运动鞋', 'Sepatu Sneakers Putih Klasik', 'Timeless white sneakers for any occasion', '适合任何场合的永恒白色运动鞋', 'Sepatu putih abadi untuk segala acara', 75.00, 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg', true, true),
  ((SELECT id FROM categories WHERE slug = 'electronics'), 'wireless-earbuds', 'Premium Wireless Earbuds', '高级无线耳机', 'Earbuds Nirkabel Premium', 'High-quality sound with active noise cancellation', '主动降噪的高品质音质', 'Suara berkualitas tinggi dengan pembatalan kebisingan aktif', 149.99, 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg', true, true),
  ((SELECT id FROM categories WHERE slug = 'home'), 'ceramic-vase', 'Modern Ceramic Vase', '现代陶瓷花瓶', 'Vas Keramik Modern', 'Handcrafted ceramic vase for your home', '为您的家手工制作的陶瓷花瓶', 'Vas keramik buatan tangan untuk rumah Anda', 45.00, 'https://images.pexels.com/photos/1030855/pexels-photo-1030855.jpeg', false, true),
  ((SELECT id FROM categories WHERE slug = 'beauty'), 'skincare-set', 'Essential Skincare Set', '基础护肤套装', 'Set Perawatan Kulit Esensial', 'Complete skincare routine for glowing skin', '让肌肤焕发光彩的完整护肤程序', 'Rutinitas perawatan kulit lengkap untuk kulit bercahaya', 129.99, 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg', true, true),
  ((SELECT id FROM categories WHERE slug = 'home'), 'table-lamp', 'Designer Table Lamp', '设计师台灯', 'Lampu Meja Desainer', 'Elegant lighting solution for modern spaces', '现代空间的优雅照明解决方案', 'Solusi pencahayaan elegan untuk ruang modern', 95.00, 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg', false, true)
ON CONFLICT (slug) DO NOTHING;