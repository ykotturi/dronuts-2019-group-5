# Requires you to run `az login` first
#
# If you get the warning
# ```
#   No subscriptions were found for 'None'.
#   If this is expected, use '--allow-no-subscriptions' to have tenant level accesses
# ```
# then it means you need to accept the lab invitation for Azure (in your email)

sub=$(az account show --query "id" -o tsv)

docker-machine create -d azure \
--azure-subscription-id $sub \
--azure-ssh-user azureuser \
--azure-open-port 80 \
--azure-resource-group cmu-17-356 \
--azure-size "Standard_A1_v2" \
dronuts-2019-group-5
