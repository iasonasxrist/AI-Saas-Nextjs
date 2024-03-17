-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    " stripe_customer_id" TEXT,
    " stripe_subscription_id" TEXT,
    " stripe_price_id" TEXT,
    "stripe_current_period_end" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_ stripe_customer_id_key" ON "User"(" stripe_customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_ stripe_subscription_id_key" ON "User"(" stripe_subscription_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_ stripe_price_id_key" ON "User"(" stripe_price_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_stripe_current_period_end_key" ON "User"("stripe_current_period_end");
