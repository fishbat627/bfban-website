<template>
  <div>
    <template v-if="verificationList.length > 0">
      <Card dis-hover v-for="(i, index) in verificationList" :key="index" class="interval-card">
        <Row :gutter="10">
          <Col :xs="{span: 6}">
            <b v-if="i.username">{{ i.username }}</b> <template v-if="i.userId">({{i.userId}})</template>
            <p><Tag>{{ i.type }}</Tag></p>
          </Col>
          <Col flex="1">
            <Input v-model="i.uniqCode" show-word-limit readonly type="textarea" :autosize="{min: 0, max: 10}"/>
          </Col>
          <Col>
            <p><Time :time="i.expiresTime"></Time>-<Time :time="i.createTime"></Time></p>
          </Col>
        </Row>
      </Card>
    </template>
    <Card dis-hover v-else>
      <Empty></Empty>
    </Card>
  </div>
</template>

<script>
import {api, http_token} from "@/assets/js";
import Empty from "@/components/Empty";

export default {
  name: "verifications",
  components: {Empty},
  data() {
    return {
      verificationList: [],
      load: false,
      limit: 20,
      skip: 1,
      total: 0
    }
  },
  created() {
    this.http = http_token.call(this);

    this.getVerifications()
  },
  methods: {
    getVerifications() {
      this.load = true;
      this.http.get(api['admin_verifications'], {
        params: {
          limit: this.limit,
          skip: (this.skip - 1) * this.limit,
          total: this.total,
        }
      }).then(res => {
        const d = res.data;

        if (d.success == 1) {
          this.verificationList = d.data;
          this.total = d.total;
        }
      }).finally(() => {
        this.load = false;
      });
    }
  }
}
</script>

<style ref="less" scoped>
.interval-card {
  margin-bottom: 10px;
}
</style>
